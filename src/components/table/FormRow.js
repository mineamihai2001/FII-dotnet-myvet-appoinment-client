import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus, faSquareMinus } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuid } from "uuid";
import config from "../../config/config.js";

const add = (name, handler) => {
    const addBtn = document.getElementById("add");
    const formRow = document.getElementById("form-row");
    const inputs = document.getElementsByClassName("row-form-input");

    const empty = {};
    config.tables[name].disabled.map((col) => {
        empty[col] = [];
    }); // TODO: NOT GOOD (for sending data back to the server)

    const formData = { id: "#", uuid: uuid(), ...empty };
    let fail = false;

    for (const input of inputs) {
        input.classList.remove("border-danger", "border-5");
        if (input.value === "" || typeof input.value === "undefined") {
            input.classList.add("border-danger", "border-5");
            fail = true;
        }
        formData[input.id] = input.value;
    }
    if (fail) return;

    resetForm(); // empty the form for the new row
    handler(formData);
};

const resetForm = () => {
    const inputs = document.getElementsByClassName("row-form-input");
    for (const input of inputs) {
        input.value = "";
    }
};

const resetInputs = () => {
    const inputs = document.getElementsByClassName("row-form-input");
    for (const input of inputs) {
        input.addEventListener("change", () => {
            input.classList.remove("border-danger", "border-5");
        });
    }
};

export default (props) => {
    const { name, inputs, handler } = props;

    resetInputs();
    return (
        <>
            <tr id="form-row">
                {inputs.map((cell, index) => {
                    if (index === 0)
                        return <th className="align-middle justify-content-center">#</th>;
                    return (
                        <td scope="col">
                            <input
                                id={config.tables[name].disabled.includes(cell) ? "" : cell}
                                className={
                                    "form-control w-75 " +
                                    (config.tables[name].disabled.includes(cell)
                                        ? ""
                                        : " row-form-input")
                                }
                                disabled={config.tables[name].disabled.includes(cell) ? true : ""}
                                placeholder={cell}
                            />
                        </td>
                    );
                })}
                <td className="align-middle justify-content-center">
                    <a id="add" style={{ cursor: "pointer" }} onClick={() => add(name, handler)}>
                        <FontAwesomeIcon icon={faSquarePlus} className="text-dark" size="xl" />
                    </a>
                </td>
            </tr>
        </>
    );
};
