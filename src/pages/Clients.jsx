import ClientLeftPane from "../components/clients/ClientLeftPane";
import ClientRightPane from "../components/clients/ClientRightPane";
import { fetchData } from "../modules/table";
import { useState, useEffect } from "react";

const Clients = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        fetchData("Clients").then((response) => setClients(response));
    }, []);

    return (
        <>
            <div className="p-5 d-flex">
                <ClientLeftPane clients={clients} />
                <ClientRightPane context={[clients, setClients]} />
            </div>
        </>
    );
};

export default Clients;
