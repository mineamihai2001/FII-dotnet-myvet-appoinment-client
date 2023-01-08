import { Link, redirect, useNavigate } from "react-router-dom";
import Form from "../components/form/Form";
import "../styles/login.css";
import { login } from "../modules/auth";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../components/form/Input";
import config from "../config/config";

const Login = ({ context: [user, setUser] }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({ mode: "onChange" });

    const onCompleted = () => {
        const data = {
            EmailAddress: email,
            Password: password,
        };
        setError("");

        fetch(config.__server.domain + "/login", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((response) => {
                if (response.status === 0) {
                    setError(response?.body);
                    return;
                }
                setUser(true);
                navigate("/");
                return;
            })
            .catch((err) => console.log("err", err));
    };

    return (
        <>
            <div
                className="d-flex justify-content-center 
                        align-items-center flex-column h-100"
            >
                <div id="login-panel" className="w-50 p-5 shadow p-3 mb-5 bg-body rounded">
                    <h3>Login</h3>
                    <span className="text-danger">{error}</span>
                    <form onSubmit={handleSubmit(onCompleted)}>
                        <div className="mb-3">
                            <label for="email" className="form-label">
                                Email
                            </label>
                            <input
                                {...register("email", { required: "Required" })}
                                onChange={(e) => setEmail(e.target.value)}
                                id="email"
                                type="email"
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label for="password" className="form-label">
                                Password
                            </label>
                            <input
                                {...register("password", { required: true })}
                                onChange={(e) => setPassword(e.target.value)}
                                id="password"
                                type="password"
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3 form-check">
                            <input
                                id="remember"
                                className="form-check-input"
                                type="checkbox"
                                onChange={(e) => console.log(e.target.checked)} // TODO: don't delete from localStorage if yes
                            />
                            <label htmlFor="remember" className="form-check-label">
                                Remember Me
                            </label>
                        </div>
                        <button type="submit" className="btn btn-dark">
                            Login
                        </button>
                    </form>
                    <span className="float-end">
                        <Link to="/register">Don't have an account? Register now.</Link>
                    </span>
                </div>
            </div>
        </>
    );
};

export default Login;
