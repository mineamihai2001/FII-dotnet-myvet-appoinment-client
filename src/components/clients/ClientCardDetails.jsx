import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import config from "../../config/config";

const ClientCardDetails = () => {
    const { clientId } = useParams();
    const [client, setClient] = useState({});

    useEffect(() => {
        fetch(`${config.__server.domain + config.__server.endpoint}/Clients/${clientId}`, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((response) => setClient(response));
    }, [clientId]);

    return (
        <>
            <div className="p-5 border border-2 rounded-3">
                <span className="fs-3 fw-bolder d-flex justify-content-center align-items-center">
                    Client #<span className="fs-5 fw-normal">{client.id}</span>
                </span>
                <div className="fs-5 mt-3">
                    {Object.entries(client).map(([key, value]) => {
                        return (
                            <div className="row">
                                <div className="col-4 fw-semibold">
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

export default ClientCardDetails;
