import Table from "../table/Table";
import config from "../../config/config.js";
import { useState } from "react";

const handleChange = (setSelected) => {
    const select = document.getElementById("table-select");
    console.log(select.value);
    setSelected(select.value)
};

export default function () {
    const [selected, setSelected] = useState("Clients");

    return (
        <>
            <div id="header" className="d-flex justify-content-center align-content-center mt-5">
                <label className="form-tex d-flex justify-content-center align-items-center fw-semibold pe-3">
                    Select data source:{" "}
                </label>
                <select
                    id="table-select"
                    className="form-select w-25"
                    onChange={() => handleChange(setSelected)}
                >
                    {config.tables.map((table) => {
                        return <option value={table}>{table}</option>;
                    })}
                </select>
            </div>
            <div className="p-5 m-5">
                <Table name={selected} />
            </div>
        </>
    );
}
