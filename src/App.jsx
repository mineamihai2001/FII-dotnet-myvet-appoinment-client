import React from "react";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/main/Navbar";

export default function App() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}
