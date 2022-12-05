import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSquarePlus,
    faSquareMinus,
    faPencil,
    faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";
import config from "../../config/config.js";

/**
 * Edit Row handler (show | hide)
 * @param {boolean} state true if edit is enabled | false otherwise
 */
const editRow = (id) => {
    const parent = document.getElementById(id);

    const display = parent.querySelectorAll(".display");
    const hidden = parent.querySelectorAll(".hidden");

    [...display].forEach((item) => item.classList.toggle("d-none"));
    [...hidden].forEach((item) => item.classList.toggle("d-none"));

    parent.querySelector(".confirm").classList.toggle("invisible");
};

/**
 * Confirm Edit handler
 * Push the updated data to the updated array
 * @param {callback} updateHandler useState setter
 */
const confirmEdit = (name, initialData, updateHandler) => {
    Object.entries(initialData).forEach(([key, value]) => {
        if (config.tables[name].disabled.includes(key) || key == "uuid" || key === "id") return;
        const input = document.getElementById(`${initialData.uuid}-${key}`);
        initialData[key] = input?.value;
    });

    updateHandler(initialData);
    editRow(initialData.uuid);
};

export default (props) => {
    const { name, data, deleteHandler, updateHandler } = props;
    return (
        <>
            <tr id={data.uuid}>
                {Object.entries(data).map(([key, value], index) => {
                    if (key !== "uuid") {
                        return key === "id" ? (
                            <th className="align-middle">#{value}</th>
                        ) : (
                            <td className="align-middle">
                                <div className="display">{value}</div>
                                <input
                                    id={`${data.uuid}-${key}`}
                                    className="form-control d-none hidden w-75"
                                    defaultValue={value}
                                    disabled={
                                        config.tables[name].disabled.includes(key) ? true : ""
                                    }
                                    placeholder={value}
                                />
                            </td>
                        );
                    }
                })}
                <td className="align-middle justify-content-center">
                    <a
                        style={{ cursor: "pointer" }}
                        onClick={() => deleteHandler(data)}
                        title="Delete"
                    >
                        <FontAwesomeIcon
                            icon={faSquareMinus}
                            className="text-secondary"
                            size="xl"
                        />
                    </a>
                </td>
                <td className="align-middle justify-content-center">
                    <a
                        style={{ cursor: "pointer" }}
                        className="btn btn-outline-secondary"
                        onClick={() => editRow(data.uuid)}
                        title="Edit"
                    >
                        <FontAwesomeIcon icon={faPencil} className="edit" size="xl" />
                    </a>
                </td>
                <td className="align-middle justify-content-center">
                    <a
                        style={{ cursor: "pointer" }}
                        className="btn btn-outline-dark confirm invisible px-3"
                        onClick={() => confirmEdit(name, data, updateHandler)}
                        title="Confirm"
                    >
                        <FontAwesomeIcon icon={faSquareCheck} className="" size="xl" />
                    </a>
                </td>
            </tr>
        </>
    );
};
