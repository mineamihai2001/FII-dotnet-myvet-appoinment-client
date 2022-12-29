import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const formData = {
    date: "date",
    start: "text",
    end: "text",
    medic: ["Medic1", "Medic2", "Medic3", "Medic4"],
    type: ["Control", "Test", "Operation", "Anaesthesia"],
    patient: "text",
    description: "textarea",
};

const formElementFactory = (value) => {
    if (value === "text") {
        return (
            <input
                type="email"
                className="form-control col"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
            />
        );
    } else if (value === "date") {
        return <input id="startDate" className="form-control col" type="date" />;
    } else if (Array.isArray(value)) {
        return (
            <select className="form-select col">
                {value.map((opt) => (
                    <option value={opt}>{opt}</option>
                ))}
            </select>
        );
    } else if (value === "textarea") {
        return (
            <textarea
                className="form-control"
                rows="7"
                placeholder="Leave a description (optional)"
                id="floatingTextarea"
            ></textarea>
        );
    }
};

const Create = () => {
    return (
        <>
            <div className="p-5 border border-2 rounded-3">
                <div className="d-flex justify-content-start align-items-center">
                    <span className="fs-3 fw-bold border-bottom border-2 border-dark">
                        New Appointment
                    </span>
                    <FontAwesomeIcon
                        icon={faPlusCircle}
                        id="create-appointment"
                        size="xl"
                        className="scalable text-secondary ms-auto me-3"
                        style={{ cursor: "pointer" }}
                    />
                </div>
                <form className="mt-5">
                    {Object.entries(formData).map(([key, value]) => {
                        return (
                            <div className="mb-3 row">
                                <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label col-2 fw-semibold"
                                >
                                    {key[0].toUpperCase() + key.slice(1)}
                                </label>
                                {formElementFactory(value)}
                            </div>
                        );
                    })}
                </form>
            </div>
        </>
    );
};

export default Create;
