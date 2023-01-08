import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import config from "../config/config";

const Register = ({ context: [user, setUser] }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirm, setConfirm] = useState();
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onCompleted = () => {
        setError("");
        console.log({
            email,
            password,
            confirm,
        });

        const data = {
            emailAddress: email,
            password: password,
            role: "Medic",
        };

        fetch(config.__server.domain + "/register", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((response) => {
                if (response?.status === 0) {
                    setError(response?.body);
                    return;
                }
                navigate("/login");
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
                <div id="register-panel" className="w-50 p-5 shadow p-3 mb-5 bg-body rounded">
                    <h3>Register</h3>
                    <span className="text-danger">{error}</span>
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
                        <div className="mb-3">
                            <label for="confirm-password" className="form-label">
                                Confirm Password
                            </label>
                            <input
                                {...register("confirm", {
                                    required: true,
                                    validate: (val) => {
                                        if (watch("password") !== val) {
                                            setError("Your passwords don't match");
                                            return "Your passwords don't match";
                                        }
                                    },
                                })}
                                onChange={(e) => setConfirm(e.target.value)}
                                id="confirm-password"
                                type="password"
                                className="form-control"
                            />
                        </div>
                        <button type="submit" className="btn btn-dark">
                            Register
                        </button>
                    </form>

                    <span className="float-end">
                        <Link to="/login">Already have an account? Login now.</Link>
                    </span>
                </div>
            </div>
        </>
    );
};

export default Register;
