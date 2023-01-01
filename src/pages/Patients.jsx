import PatientLeftPane from "../components/patients/PatientLeftPane";
import PatientRightPane from "../components/patients/PatientRightPane";

const Patients = () => {
    return (
        <>
            <div className="p-5 d-flex">
                <PatientLeftPane />
                <PatientRightPane />
            </div>
        </>
    );
};

export default Patients;
