import { useParams } from "react-router-dom";
import { _appointments } from "../../data/mocks";
import { useState, useEffect } from "react";
import config from "../../config/config";

const CardDetails = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});

    useEffect(() => {
        console.log(
            `${config.__server.domain + config.__server.endpoint}/Appointments/${appointmentId}`
        );
        fetch(
            `${config.__server.domain + config.__server.endpoint}/Appointments/${appointmentId}`,
            {
                method: "GET",
            }
        )
            .then((response) => response.json())
            .then((response) => setAppointment(response));
    }, [appointmentId]);

    return (
        <>
            <div className="p-5 border border-2 rounded-3">
                <span className="fs-3 fw-bolder">Appointment #{appointment.id}</span>
                <div className="fs-5 mt-3">
                    {Object.entries(appointment).map(([key, value]) => {
                        if (key !== "description")
                            return (
                                <div className="row">
                                    <div className="col-4 fw-semibold">
                                        {key[0].toUpperCase() + key.slice(1)}:
                                    </div>
                                    <div className="col">{value}</div>
                                </div>
                            );
                    })}
                    <div className="mt-3 row">
                        <span className="col-12 fw-bold">Description:</span>
                        <textarea disabled className="form-control" defaultValue={appointment.description}></textarea>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardDetails;
