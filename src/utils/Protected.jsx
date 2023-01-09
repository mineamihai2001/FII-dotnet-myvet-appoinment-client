import { Outlet, useNavigate } from "react-router-dom";
import App from "../App";
import { useEffect } from "react";
import { useStorage } from "../hooks/useStorage";

const Protected = ({ context: [user, setUser] }) => {
    const navigate = useNavigate();
    const [storage, setStorage] = useStorage("user");

    useEffect(() => {
        if (!user && typeof storage?.token === "undefined") {
            return navigate("/login");
        }
    }, [user]);

    if (user || typeof storage?.token !== "undefined") return <App context={[user, setUser]} />;
};

export default Protected;
