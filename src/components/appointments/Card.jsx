import { Link } from "react-router-dom";
import "../../styles/appointments.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
    const { id, date, start, end, medic, type, clientId } = props;

    // TODO: make more dynamic
    return (
        <>
            <Link
                to={`${id}`}
                id={`app-card-${id}`}
                className="appointment-card border border-5 p-3 rounded-4 row my-2 text-decoration-none text-dark"
                style={{ cursor: "pointer" }}
            >
                <div id="time-details" className="fs-6 col-6">
                    <div className="d-flex">
                        <span className="fw-bold me-2">Date:</span>
                        <span>{date}</span>
                    </div>
                    <div className="d-flex">
                        <span className="fw-bold me-2">Start:</span>
                        <span>{start}</span>
                    </div>
                    <div className="d-flex">
                        <span className="fw-bold me-2">End:</span>
                        <span>{end}</span>
                    </div>
                </div>
                <div id="app-details" className="ms-auto fs-6 col-5">
                    <div className="d-flex">
                        <span className="fw-bold me-2">Medic:</span>
                        <span>{medic}</span>
                    </div>
                    <div className="d-flex">
                        <span className="fw-bold me-2">Type:</span>
                        <span>{type}</span>
                    </div>
                    <div className="d-flex">
                        <span className="fw-bold me-2">Client:</span>
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
