import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Vet from "../assets/vet-home.jpg";
import "../styles/home.css";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="h-100 d-flex align-items-center">
                <div className="h-75 w-100 d-flex" style={{ background: "#fafbfd" }}>
                    <div className="col-5 d-flex justify-content-center align-items-center">
                        <img src={Vet} className="h-75" />
                    </div>
                    <div className="col d-flex justify-content-start align-items-center">
                        <div>
                            <div>
                                <span className="fs-1 fw-bolder text-purple">VetAppointment</span>
                                <span className="fs-3 fw-bold ms-4"> Your clinic's best agenda</span>
                            </div>
                            <div>
                                <div className="d-flex my-5 fw-semibold">
                                    <FontAwesomeIcon
                                        icon={faCircleCheck}
                                        className="text-green me-5"
                                        size="3x"
                                    />
                                    <span className="fs-3">Create appointments on the spot</span>
                                </div>
                                <div className="d-flex my-5 fw-semibold">
                                    <FontAwesomeIcon
                                        icon={faCircleCheck}
                                        className="text-green me-5"
                                        size="3x"
                                    />
                                    <span className="fs-3">Manage your clients</span>
                                </div>
                                <div className="d-flex my-5 fw-semibold">
                                    <FontAwesomeIcon
                                        icon={faCircleCheck}
                                        className="text-green me-5"
                                        size="3x"
                                    />
                                    <span className="fs-3">Billing options integrated</span>
                                </div>
                            </div>
                            <Link to="/dashboard" className="btn btn-purple px-5 fs-5">Start now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
