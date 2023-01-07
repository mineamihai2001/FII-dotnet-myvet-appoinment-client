import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { postData } from "../../modules/table";
import { useOutletContext } from "react-router-dom";
import { useForm } from "react-hook-form";

const ClientCreate = () => {
    const [clients, setClients] = useOutletContext();

    const [name, setName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [emailAddress, setEmailAddress] = useState();
    const [address, setAddress] = useState();
    const [pet, setPet] = useState(); // single pet only used for form register

    const [pets, setPets] = useState([]);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handlePets = () => {
        const value = pet;
        if (value && !pets.includes(value)) {
            setPets([...pets, value]);
        }
    };

    const onCompleted = () => {
        setError("");
        setSuccess("");

        const data = {
            medicId: "329701c7-d238-47f6-9733-ea9024f814d8",
            name,
            phoneNumber,
            emailAddress,
            address,
            pets,
        };
        console.log(data);

        postData("Clients", data)
            .then((response) => {
                console.log(response);
                if (typeof response[0]?.errorMessage !== "undefined") {
                    setError(response[0].errorMessage);
                } else {
                    console.log({ ...data, id: response?.id });
                    setClients([...clients, { ...data, id: response?.id }]);
                    setSuccess("Client added");
                }
            })
            .catch((error) => {
                setError(error);
            });
    };

    return (
        <>
            <div className="p-5 border border-2 rounded-3">
                <form className="" onSubmit={handleSubmit(onCompleted)}>
                    <div className="d-flex justify-content-start align-items-center">
                        <span className="fs-3 fw-bold border-bottom border-2 border-dark">
                            Add Client
                        </span>
                        <button type="submit" className="ms-auto btn">
                            <FontAwesomeIcon
                                icon={faPlusCircle}
                                id="create-appointment"
                                size="xl"
                                className="scalable text-secondary me-3"
                                style={{ cursor: "pointer" }}
                            />
                        </button>
                    </div>
                    <div className="mt-3 text-danger">{error}</div>
                    <div className="mt-3 text-success">{success}</div>
                    <div className="mb-3 row mt-4">
                        <label className="form-label col-2 fw-semibold">Name</label>
                        <input
                            {...register("name", { required: true })}
                            type="text"
                            id="name"
                            onChange={(e) => setName(e.target.value)}
                            className="client-field form-control col"
                            placeholder="Full Name"
                        />
                    </div>
                    <div className="mb-3 row">
                        <label className="form-label col-2 fw-semibold">Phone</label>
                        <input
                            {...register("phoneNumber", { required: true })}
                            id="phoneNumber"
                            type="text"
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="client-field form-control col"
                        />
                    </div>
                    <div className="mb-3 row">
                        <label className="form-label col-2 fw-semibold">Email</label>
                        <input
                            {...register("emailAddress", { required: true })}
                            id="emailAddress"
                            type="email"
                            onChange={(e) => setEmailAddress(e.target.value)}
                            className="client-field form-control col"
                        />
                    </div>
                    <div className="mb-3 row">
                        <label className="form-label col-2 fw-semibold">Address</label>
                        <input
                            {...register("address", { required: true })}
                            id="address"
                            type="address"
                            onChange={(e) => setAddress(e.target.value)}
                            className="client-field form-control col"
                            placeholder="Full Home Address"
                        />
                    </div>
                    <div className="mb-3 row">
                        <label className="form-label fw-semibold">Pets</label>
                        <div className="input-group">
                            <input
                                {...register("pet", { required: true })}
                                type="text"
                                id="pet"
                                onChange={(e) => setPet(e.target.value)}
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
                                        type="text"
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
