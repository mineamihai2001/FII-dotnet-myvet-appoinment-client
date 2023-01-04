import { Link } from "react-router-dom";
import "../../styles/appointments.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ClientCard = (props) => {
    const { id, data } = props;

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
                        <span className="fw-bold me-2">Name:</span>
                        <span>{data.name}</span>
                    </div>
                    <div className="d-flex">
                        <span className="fw-bold me-2">Pets:</span>
                        <span>{data.pet}</span>
                    </div>
                    <div className="d-flex">
                        <span className="fw-bold me-2">Phone:</span>
                        <span>{data.phoneNumber}</span>
                    </div>
                </div>
                <div id="app-details" className="ms-auto fs-6 col-5">
                    <div className="d-flex">
                        <span className="fw-bold me-2">Email:</span>
                        <span>{data.emailAddress}</span>
                    </div>
                    <div className="d-flex">
                        <span className="fw-bold me-2">Address:</span>
                        <span>{data.address}</span>
                    </div>
                </div>
                <div id={`delete-${id}`} className="delete-app col-1 d-flex align-items-center">
                    <FontAwesomeIcon icon={faTrash} />
                </div>
            </Link>
        </>
    );
};

export default ClientCard;
