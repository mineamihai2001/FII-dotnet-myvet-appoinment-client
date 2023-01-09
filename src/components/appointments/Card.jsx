import { Link } from "react-router-dom";
import "../../styles/appointments.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
    const { id, date, startDate, endDate, medic, type, clientId, isPayed } = props;

    console.log(isPayed);
    return (
        <>
            <Link
                to={`${id}`}
                id={`app-card-${id}`}
                className={`appointment-card border border-5 border-secondary p-3 rounded-4 row my-2 text-decoration-none text-dark ${
                    isPayed ? "" : "bg-red"
                }`}
                style={{ cursor: "pointer" }}
            >
                <div id="time-details" className="fs-6 col-6">
                    <div className="d-flex">
                        <span className="fw-bold me-2">Start:</span>
                        <span>{startDate}</span>
                    </div>
                    <div className="d-flex">
                        <span className="fw-bold me-2">End:</span>
                        <span>{endDate}</span>
                    </div>
                    <div className="d-flex">
                        <span className="fw-bold me-2">Status:</span>
                        <span className={`fw-bolder ${isPayed ? "" : "text-red"}`}>{isPayed ? "Payed" : "Pending"}</span>
                    </div>
                </div>
                <div id="app-details" className="ms-auto fs-6 col-5">
                    {/* <div className="d-flex">
                        <span className="fw-bold me-2">Medic:</span>
                        <span>{medic}</span>
                    </div> */}
                    <div className="d-flex">
                        <span className="fw-bold me-2">Type:</span>
                        <span>{type}</span>
                    </div>
                    <div className="d-flex">
                        <span className="fw-bold me-2">Patient:</span>
                        <span>{clientId}</span>
                    </div>
                </div>
                <div id={`delete-${id}`} className="delete-app col-1 d-flex align-items-center">
                    <FontAwesomeIcon icon={faTrash} />
                </div>
            </Link>
        </>
    );
};

export default Card;
