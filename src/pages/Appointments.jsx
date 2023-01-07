import { useState, useEffect } from "react";
import LeftPane from "../components/appointments/LeftPane";
import RightPane from "../components/appointments/RightPane";
import { fetchData } from "../modules/table";
import {_appointments} from "../data/mocks"

export default () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetchData("Appointments").then((response) => setAppointments(response));
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
