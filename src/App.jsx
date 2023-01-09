import React from "react";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/main/Navbar";
import "./styles/index.css";

export default function App({ context: [user, setUser] }) {
    return (
        <>
            <Navbar context={[user, setUser]} />
            <Outlet />
        </>
    );
}
