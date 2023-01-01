import { useParams } from "react-router-dom";
import { patients } from "../../data/mocks";

const PatientCardDetails = () => {
    const { patientId } = useParams();
    console.log("---> ", patientId);

    return (
        <>
            <div className="p-5 border border-2 rounded-3">
                <span className="fs-3 fw-bolder">Patient #{patientId}</span>
                <div className="fs-5 mt-3">
                    {Object.entries(patients[parseInt(patientId)]).map(([key, value]) => {
                        return (
                            <div className="row">
                                <div className="col-2 fw-semibold">
                                    {key[0].toUpperCase() + key.slice(1)}:
                                </div>
                                <div className="col">{value}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default PatientCardDetails;
