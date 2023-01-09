import { useState, useEffect } from "react";
import LeftPane from "../components/appointments/LeftPane";
import RightPane from "../components/appointments/RightPane";
import { fetchData } from "../modules/table";
import { _appointments } from "../data/mocks";
import config from "../config/config";
import { useStorage } from "../hooks/useStorage";

export default () => {
    const [appointments, setAppointments] = useState([]);
    const [storage, setStorage] = useStorage("user");

    useEffect(() => {
        fetch(
            `${config.__server.domain + config.__server.endpoint}/Appointments/medic/${
                storage?.medicId
            }`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
            .then((response) => response.json())
            .then((response) => setAppointments(response));
        // setAppointments(_appointments)
    }, []);

    return (
        <>
            <div className="p-5 d-flex">
                <LeftPane appointments={appointments} />
                <RightPane context={[appointments, setAppointments]} />
            </div>
        </>
    );
};
