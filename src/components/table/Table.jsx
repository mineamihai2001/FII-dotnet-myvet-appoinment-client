import { React, useState } from "react";
import Row from "./Row";
import "../../styles/table.css";
import FormRow from "./FormRow";

export default (props) => {
    const { data } = props;
    const [tableData, setTableData] = useState(data.body.source);

    const handleTableData = (newData) => {
        console.log("before", tableData);
        const copy = tableData;
        copy.push(newData);
        console.log("called", copy)
        setTableData(copy);
        console.log(tableData);
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
                            return <Row data={row} />;
                        })}
                        <FormRow inputs={data.head} handler={handleTableData}/>
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
