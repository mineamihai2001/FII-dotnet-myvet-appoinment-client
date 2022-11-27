import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus, faSquareMinus } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuid } from "uuid";

const add = (handler) => {
    const addBtn = document.getElementById("add");
    const formRow = document.getElementById("form-row");
    const inputs = document.getElementsByClassName("row-form-input");

    const formData = { id: "#", uuid: uuid() };
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
    const { inputs, handler } = props;

    resetInputs();
    return (
        <>
            <tr id="form-row">
                {inputs.map((cell, index) => {
                    if (index === 0) return <th className="d-flex justify-content-center">#</th>;
                    return (
                        <td scope="col">
                            <input
                                id={cell.replaceAll(" ", "_").toLowerCase()}
                                className="form-control w-75 row-form-input"
                                placeholder={cell}
                            />
                        </td>
                    );
                })}
                <td className="d-flex justify-content-center align-items-center">
                    <a id="add" style={{ cursor: "pointer" }} onClick={() => add(handler)}>
                        <FontAwesomeIcon icon={faSquarePlus} className="text-success" size="xl" />
                    </a>
                </td>
            </tr>
        </>
    );
};
