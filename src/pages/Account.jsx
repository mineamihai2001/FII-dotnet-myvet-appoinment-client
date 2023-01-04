import AccountForm from "../components/account/AccountForm";
import SampleProfile from "../assets/sample_profile.jpg";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import config from "../config/config";

const personalForm = {
    fullName: "Nume Prenume",
    email: "email@email.com",
    address: "Iasi, Iasi RO 700700",
    phone: "0788888888",
};

const employmentForm = {
    employeeId: crypto.randomUUID(),
    role: "Medic V.",
    leaveDaysLeft: Math.floor(Math.random() * 21),
    sickDays: Math.floor(Math.random() * 5),
    contractLength: "3y",
};

const MEDIC_ID = "329701c7-d238-47f6-9733-ea9024f814d8"; // TODO: get from auth
const Account = () => {
    const [personalForm, setPersonalForm] = useState({});

    useEffect(() => {
        fetch(`${config.__server.domain + config.__server.endpoint}/Medics/${MEDIC_ID}`, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((response) => setPersonalForm(response));
    }, []);

    return (
        <>
            <div id="account-page">
                <div id="header" className="row fs-1 mt-5 pb-5">
                    <div className="col-4 fs-3 d-flex justify-content-center">
                        <img
                            src={SampleProfile}
                            className="border border-3 border-dark rounded-circle d-flex align-items-center"
                            style={{ height: "10rem", width: "10rem" }}
                        />
                    </div>
                    <div className="col-8 d-flex flex-column">
                        <div className="fw-semibold">{personalForm?.name}</div>
                        <div className="fs-4">{employmentForm?.role.toUpperCase()}</div>
                    </div>
                </div>
                <AccountForm data={personalForm} title={"Personal Information"} />
                <AccountForm data={employmentForm} title={"Employment Information"} />
            </div>
        </>
    );
};

export default Account;
