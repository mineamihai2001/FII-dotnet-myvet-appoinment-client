import { React, useState } from "react";
import Row from "./Row";
import "../../styles/table.css";
import FormRow from "./FormRow";
import { v4 as uuid } from "uuid";

const parse = (data) => {
    return data.map(row => {
        return {
            uuid: uuid(),
            ...row
        }
    });
}

export default (props) => {
    const { data } = props;
    const [tableData, setTableData] = useState(parse(data.body.source));

    const handleNewTableData = (newData) => {
        tableData.push(newData);
        setTableData([...tableData]);
    };

    const handleDeleteTableData = (row) => {
        const copy = tableData.filter(r => r.uuid !== row.uuid);
        setTableData([...copy]);
    }

    return (
        <>
            <div id="data">
                <table className="table table-hover">
                    <thead className="table-dark">
                        <tr>
                            {data.head.map((cell) => {
                                return <th scope="col">{cell}</th>;
                            })}
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {tableData.map((row) => {
                            return <Row data={row} handler={handleDeleteTableData}/>;
                        })}
                        <FormRow inputs={data.head} handler={handleNewTableData} />
                    </tbody>
                </table>
                <div id="bottom">
                    <button
                        id="form-submit"
                        type="button"
                        className="btn btn-outline-secondary w-25 fs-5"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </>
    );
};
