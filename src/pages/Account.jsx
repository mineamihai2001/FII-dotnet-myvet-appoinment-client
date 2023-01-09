import AccountForm from "../components/account/AccountForm";
import SampleProfile from "../assets/sample_profile.jpg";
import { useState, useEffect } from "react";
import config from "../config/config";
import { useStorage } from "../hooks/useStorage";

const employmentForm = {
    employeeId: crypto.randomUUID(),
    role: "Medic V.",
    leaveDaysLeft: Math.floor(Math.random() * 21),
    sickDays: Math.floor(Math.random() * 5),
    contractLength: "3y",
};

const Account = () => {
    const [personalForm, setPersonalForm] = useState({});
    const [storage, setStorage] = useStorage("user");

    useEffect(() => {
        console.log(storage);
        fetch(`${config.__server.domain + config.__server.endpoint}/Medics/${storage?.medicId}`, {
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
