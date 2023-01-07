import { Link, redirect, useNavigate } from "react-router-dom";
import Form from "../components/form/Form";
import "../styles/login.css";
import { login } from "../modules/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onCompleted = () => {
        console.log({
            email,
            password,
        });

        return navigate("/"); // TODO: fetch response

        return {
            email,
            password,
        };
    };

    return (
        <>
            <div
                className="d-flex justify-content-center 
                        align-items-center flex-column h-100"
            >
                <div id="login-panel" className="w-50 p-5 shadow p-3 mb-5 bg-body rounded">
                    <h3>Login</h3>
                    <form onSubmit={handleSubmit(onCompleted)}>
                        <div className="mb-3">
                            <label for="email" className="form-label">
                                Email
                            </label>
                            <input
                                {...register("email", { required: true })}
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
