import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { postData } from "../../modules/table";
import { useOutletContext } from "react-router-dom";

const addClient = (pets, context) => {
    document.getElementById("pets-input").classList.remove("border-danger", "border-5");
    if (!pets.length) {
        document.getElementById("pets-input").classList.add("border-danger", "border-5");
    }

    const fields = document.getElementsByClassName("client-field");
    const data = {
        medicId: "329701c7-d238-47f6-9733-ea9024f814d8", // TODO: get current id
        pets: pets,
    };
    let fail = false;

    [...fields].forEach((input) => {
        input.classList.remove("border-danger", "border-5");
        if (input.value === "" || typeof input.value === "undefined") {
            input.classList.add("border-danger", "border-5");
            fail = true;
        }
        data[input.id] = input.value;
    });

    const [clients, setClients] = context;
    setClients([...clients, data]);

    postData("Clients", data).then((response) => {
        console.log(response);
    });
};

const ClientCreate = () => {
    const [clients, setClients] = useOutletContext();
    const [pets, setPets] = useState([]);

    const handlePets = () => {
        const value = document.getElementById("pets-input").value;
        if (value && !pets.includes(value)) {
            setPets([...pets, value]);
        }
    };

    return (
        <>
            <div className="p-5 border border-2 rounded-3">
                <div className="d-flex justify-content-start align-items-center">
                    <span className="fs-3 fw-bold border-bottom border-2 border-dark">
                        Add Client
                    </span>
                    <a className="ms-auto" onClick={() => addClient(pets, [clients, setClients])}>
                        <FontAwesomeIcon
                            icon={faPlusCircle}
                            id="create-appointment"
                            size="xl"
                            className="scalable text-secondary me-3"
                            style={{ cursor: "pointer" }}
                        />
                    </a>
                </div>
                <form className="mt-5">
                    <div className="mb-3 row">
                        <label className="form-label col-2 fw-semibold">Name</label>
                        <input
                            type="email"
                            id="name"
                            className="client-field form-control col"
                            placeholder="Full Name"
                        />
                    </div>
                    <div className="mb-3 row">
                        <label className="form-label col-2 fw-semibold">Phone</label>
                        <input
                            id="phoneNumber"
                            type="text"
                            className="client-field form-control col"
                        />
                    </div>
                    <div className="mb-3 row">
                        <label className="form-label col-2 fw-semibold">Email</label>
                        <input
                            id="emailAddress"
                            type="email"
                            className="client-field form-control col"
                        />
                    </div>
                    <div className="mb-3 row">
                        <label className="form-label col-2 fw-semibold">Address</label>
                        <input
                            id="address"
                            type="address"
                            className="client-field form-control col"
                            placeholder="Full Home Address"
                        />
                    </div>
                    <div className="mb-3 row">
                        <label className="form-label fw-semibold">Pets</label>
                        <div className="input-group">
                            <input
                                type="text"
                                id="pets-input"
                                className="form-control"
                                placeholder="Species"
                            />
                            <button
                                type="button"
                                className="btn btn-outline-secondary"
                                onClick={handlePets}
                            >
                                <FontAwesomeIcon icon={faPlus} />
                            </button>
                        </div>
                        <fieldset disabled>
                            {pets.map((pet) => {
                                return (
                                    <input
                                        type="email"
                                        className="form-control"
                                        defaultValue={pet}
                                    />
                                );
                            })}
                        </fieldset>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ClientCreate;
