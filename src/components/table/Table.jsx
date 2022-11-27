import { React, useState, useEffect } from "react";

import Row from "./Row";
import FormRow from "./FormRow";

import "../../styles/table.css";

import { fetchData } from "../../modules/table.js";

/**
 * Use to select the data required for the table
 * @param {Array<Object>} data
 * @returns
 */
const parse = (data) => {
    const keys = Object.keys(data[0]);
    data = data.map((row) => {
        return {
            uuid: row.id,
            ...row,
        };
    });
    return {
        head: [...keys],
        body: [...data],
    };
};

const submit = (data) => {
    console.log("here", data);
};

export default (props) => {
    const { name } = props;
    const [tableData, setTableData] = useState([]);
    const [headData, setHeadData] = useState([]);
    const [newRows, setNewRows] = useState([]);


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
    };

    const handleDeleteTableData = (row) => {
        const copy = tableData.filter((r) => r.uuid !== row.uuid);
        setTableData([...copy]);
        const _copy = newRows.filter((r) => r.uuid !== row.uuid);
        setNewRows([..._copy]);
    };

    return (
        <>
            <h1>{name}</h1>
            <div id="data">
                <table className="table table-hover">
                    <thead className="table-dark">
                        <tr>
                            {headData.map((cell) => {
                                return <th scope="col">{cell}</th>;
                            })}
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {tableData.map((row) => {
                            return <Row data={row} handler={handleDeleteTableData} />;
                        })}
                        <FormRow inputs={headData} handler={handleNewTableData} />
                    </tbody>
                </table>
                <div id="bottom">
                    <button
                        id="form-submit"
                        type="button"
                        className="btn btn-outline-secondary w-25 fs-5"
                        onClick={() => submit(newRows)}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </>
    );
};
