import { patients } from "../../data/mocks";
import PatientCard from "./PatientCard";
import { Link } from "react-router-dom";

const PatientLeftPane = () => {
    return (
        <div className="w-50">
            <div className="row pe-5 ps-3">
                <div className="row">
                    <Link to="/patients" className="btn btn-outline-dark fw-semibold fs-5">
                        Add New Patient
                    </Link>
                </div>
            </div>
            <div className="overflow-scroll p-3 h-50">
                {patients.map((appointment, index) => {
                    return <PatientCard key={index} id={index} data={appointment} />;
                })}
            </div>
        </div>
    );
};

export default PatientLeftPane;
