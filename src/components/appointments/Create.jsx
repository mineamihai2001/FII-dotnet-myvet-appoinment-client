import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { fetchData, postData } from "../../modules/table";
import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Create = () => {
    const [appointments, setAppointments] = useOutletContext();

    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [type, setType] = useState();
    const [patient, setPatient] = useState();
    const [description, setDescription] = useState();

    const [clients, setClients] = useState([]);

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        fetchData("Clients").then((response) => setClients(response));
    }, []);

    const onCompleted = () => {
        setError("");
        setSuccess("");

        const medicId = "329701c7-d238-47f6-9733-ea9024f814d8"; // TODO: get current id
        const data = {
            medic: medicId,
            startDate,
            endDate,
            type,
            patient,
            description,
        };
        console.log(data);

        postData("Appointments", data).then((response) => {
            console.log(response);
            if (typeof response[0]?.errorMessage !== "undefined") {
                setError(response[0]?.errorMessage);
            } else {
                setAppointments([...appointments, { ...data, id: response?.id }]);
                setSuccess("Appointment added");
            }
        });
    };

    return (
        <>
            <div className="p-5 border border-2 rounded-3">
                <form className="" onSubmit={handleSubmit(onCompleted)}>
                    <div className="d-flex justify-content-start align-items-center">
                        <span className="fs-3 fw-bold border-bottom border-2 border-dark">
                            New Appointment
                        </span>
                        <button className="ms-auto btn" type="submit">
                            <FontAwesomeIcon
                                icon={faPlusCircle}
                                id="create-appointment"
                                size="xl"
                                className="scalable text-secondary ms-auto me-3"
                                style={{ cursor: "pointer" }}
                            />
                        </button>
                    </div>
                    <div className="mt-3 text-danger">{error}</div>
                    <div className="mt-3 text-success">{success}</div>
                    <div className="mt-5 mb-3 row">
                        <label className="col-2 fs-6" for="startDate">
                            Start
                        </label>
                        <input
                            {...register("startDate", { required: true })}
                            onChange={(e) => setStartDate(e.target.value)}
                            id="startDate"
                            className="form-control col appointment-field"
                            type="date"
                        />
                    </div>
                    <div className="mb-3 row">
                        <label className="col-2 fs-6" for="startDate">
                            End
                        </label>
                        <input
                            {...register("endDate", { required: true })}
                            onChange={(e) => setEndDate(e.target.value)}
                            id="endDate"
                            className="form-control col appointment-field"
                            type="date"
                        />
                    </div>
                    <div className="mb-3 row">
                        <label className="form-label col-2 fw-semibold">Type</label>
                        <input
                            {...register("type", { required: true })}
                            onChange={(e) => setType(e.target.value)}
                            id="type"
                            type="text"
                            className="appointment-field form-control col"
                        />
                    </div>
                    <div className="mb-3 row">
                        <label className="form-label col-2 fw-semibold">Patient</label>
                        <select
                            {...register("patient", { required: true })}
                            onChange={(e) => setPatient(e.target.value)}
                            id="patient"
                            type="text"
                            className="appointment-field form-select col"
                        >
                            <option defaultValue={"Please select"}>Please select</option>
                            {clients.map((client) => {
                                return <option value={client?.name}>{client?.name}</option>;
                            })}
                        </select>
                    </div>
                    <div className="mb-3 row">
                        <label className="form-label col-3 fw-semibold">Description</label>
                        <textarea
                            {...register("description", { required: true })}
                            onChange={(e) => setDescription(e.target.value)}
                            id="description"
                            type="text"
                            rows={7}
                            className="appointment-field form-control col"
                        />
                    </div>
                </form>
            </div>
        </>
    );
};

export default Create;
