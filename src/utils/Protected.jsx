import { Outlet, useNavigate } from "react-router-dom";
import App from "../App";
import { useEffect } from "react";

const Protected = ({ context: [user, setUser] }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            return navigate("/login");
        }
    }, [user]);

    if (user) return <App />;
};

export default Protected;
