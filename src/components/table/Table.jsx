import { React, useState, useEffect } from "react";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

import Row from "./Row";
import FormRow from "./FormRow";

import "../../styles/table.css";

import { fetchData, postData, deleteData, updateData } from "../../modules/table.js";
import config from "../../config/config.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Use to select the data required for the table
 * @param {Array<Object>} data
 * @returns
 */
const parse = (data) => {
    const keys = Object.keys(data[0]);
    data = data.map((row, index) => {
        const _copy = {
            uuid: row.id,
            id: index,
        };
        delete row.id;
        return {
            ..._copy,
            ...row,
        };
    });
    return {
        head: [...keys],
        body: [...data],
    };
};

/**
 * Makes sure the row cells are in the same order as the head
 * @param {Array<string>} head
 * @param {Array<Object>} row
 */
const formatRow = (head, row) => {
    const result = {};
    head.forEach((key) => {
        result[key] = row[key];
    });
    return {
        uuid: row.uuid,
        ...result,
    };
};

/**
 * Add each new row to the DB once the submit is made
 * TODO: make a route for posting a list of rows
 * @param {string} name Table Name
 * @param {Array<Object>} data Array of newly added rows
 */
const submit = (name, newRows, deletedRows, updatedRows) => {
    const bodyList = newRows.map((row) => {
        const _row = {};
        Object.entries(row).forEach(([key, value]) => {
            if (!config.tables[name].disabled.includes(key) && key !== "id" && key !== "uuid") {
                console.log(key, value);
                _row[key] = value;
            }
        });
        return _row;
    });

    // Create
    bodyList.forEach((body) => {
        postData(name, body)
            .then((response) => console.log(response))
            .catch((err) => console.log("[POST ERROR] - ", err));
    });

    // Delete
    deletedRows.forEach((row) => {
        deleteData(name, row.uuid)
            .then((response) => console.log(response))
            .catch((err) => console.log("[DELETE ERROR] - ", err));
    });

    // Update
    updatedRows.forEach((entity) => {
        entity.id = entity.uuid;
        delete entity.uuid;
        updateData(name, entity)
            .then((response) => console.log(response))
            .catch((err) => console.log("[PUT ERROR] - ", err));
    });

    hideAlert();
};

const showAlert = () => {
    const alert = document.getElementById("alert");
    alert.classList.remove("d-none");
};

const hideAlert = () => {
    const alert = document.getElementById("alert");
    alert.classList.add("d-none");
};

export default (props) => {
    const { name } = props;
    const [headData, setHeadData] = useState([]);
    const [newRows, setNewRows] = useState([]); // Create
    const [tableData, setTableData] = useState([]); // Read
    const [updatedRows, setUpdatedRows] = useState([]); // Update
    const [deletedRows, setDeletedRows] = useState([]); // Delete

    useEffect(() => {
        fetchData(name)
            .then((response) => {
                const parsed = parse(response);
                setTableData(parsed.body);
                setHeadData(parsed.head);
            })
            .catch((err) => console.log(err));
    }, [name]);

    const handleNewTableData = (newData) => {
        tableData.push(newData);
        setTableData([...tableData]);
        newRows.push(newData);
        setNewRows([...newRows]);
        showAlert();
    };

    const handleDeleteTableData = (row) => {
        const copy = tableData.filter((r) => r.uuid !== row.uuid);
        setTableData([...copy]);
        const _copy = newRows.filter((r) => r.uuid !== row.uuid);
        setNewRows([..._copy]);
        setDeletedRows([...deletedRows, row]);
        showAlert();
    };

    const handleUpdateTableData = (row) => {
        const newTableData = tableData.map((r) => {
            return row.uuid === r.uuid ? row : r;
        });
        setTableData([...newTableData]);
        const copy = updatedRows;
        copy.push(row);
        setUpdatedRows([...copy]);
        showAlert();
    };

    console.log(tableData);

    return (
        <>
            <div id="header" className="my-3">
                <h1 className="d-inline">{name}</h1>
                <div id="alert" className="d-inline d-none px-3">
                    Changes not submitted
                    <FontAwesomeIcon
                        icon={faCircleExclamation}
                        className="px-2 text-danger"
                        size="xl"
                    />
                </div>
            </div>
            <div id="data">
                <table className="table table-hover">
                    <thead className="table-dark">
                        <tr>
                            {headData.map((cell) => {
                                return (
                                    <th scope="col">
                                        {cell.charAt(0).toUpperCase() + cell.slice(1)}
                                    </th>
                                );
                            })}
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {tableData.map((row, index) => {
                            row = formatRow(headData, row);
                            return (
                                <Row
                                    key={index}
                                    name={name}
                                    data={row}
                                    deleteHandler={handleDeleteTableData}
                                    updateHandler={handleUpdateTableData}
                                />
                            );
                        })}
                        <FormRow name={name} inputs={headData} handler={handleNewTableData} />
                    </tbody>
                </table>
                <div id="bottom">
                    <button
                        id="form-submit"
                        type="button"
                        className="btn btn-outline-secondary w-25 fs-4 fw-bolder"
                        onClick={() => submit(name, newRows, deletedRows, updatedRows)}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </>
    );
};
