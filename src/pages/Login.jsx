import { Link } from "react-router-dom";
import Form from "../components/form/Form";
import "../styles/login.css";
import { login } from "../modules/auth";

const actionLogin = (valid, entries) => {
    if (!valid) return;
    const { email, password } = entries;
    login(email, password)
        .then((response) => {
            console.log(response);
            if (response?.status == "success") {
                localStorage.setItem("token", response.token);
                window.location.replace("http://localhost:3000/");
                return;
            }
        })
        .catch((err) => {
            console.log("err", err);
        });
};

const formConfig = {
    title: "Login",
    inputs: [
        {
            label: "Email address",
            type: "email",
            id: "email",
            mandatory: true,
        },
        {
            label: "Password",
            type: "password",
            id: "password",
            mandatory: true,
        },
    ],
    buttons: [
        {
            text: "Submit",
            type: "button",
        },
    ],
    action: actionLogin,
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
                        <Link to="/register">Don't have an account? Register now.</Link>
                    </span>
                </div>
            </div>
        </>
    );
};
