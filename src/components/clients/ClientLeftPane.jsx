import { useState, useEffect } from "react";
// import { clients } from "../../data/mocks";
import ClientCard from "./ClientCard";
import { Link } from "react-router-dom";

const ClientLeftPane = (props) => {
    const { clients } = props;

    return (
        <div className="w-50">
            <div className="row pe-5 ps-3">
                <div className="row">
                    <Link to="/clients" className="btn btn-outline-dark fw-semibold fs-5">
                        Add New Client
                    </Link>
                </div>
            </div>
            <div className="overflow-scroll p-3" style={{ height: "80vh" }}>
                {clients.map((client, index) => {
                    return <ClientCard key={index} id={client.id} data={client} />;
                })}
            </div>
        </div>
    );
};

export default ClientLeftPane;
