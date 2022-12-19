import { Link } from "react-router-dom";
import Form from "../components/form/Form";
import "../styles/login.css";

const formConfig = {
    title: "Register",
    inputs: [
        {
            label: "Email address",
            type: "email",
            id: "email",
        },
        {
            label: "Password",
            type: "password",
            id: "password",
        },
        {
            label: "Confirm Password",
            type: "password",
            id: "confirm-password",
        },
    ],
    buttons: [
        {
            text: "Register",
            type: "button",
        },
    ],
};

export default () => {
    return (
        <>
            <div
                className="d-flex justify-content-center 
                        align-items-center flex-column h-100"
            >
                <div id="login-panel" className="w-50 p-5 shadow p-3 mb-5 bg-body rounded">
                    <Form data={formConfig} />
                    <span className="float-end">
                        <Link to="/login">
                            Already have an account? Login now.
                        </Link>
                    </span>
                </div>
            </div>
        </>
    );
};
