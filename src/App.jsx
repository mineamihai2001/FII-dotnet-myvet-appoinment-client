import React from "react";
import { BrowserRouter, Routes, Route, createBrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/main/Navbar";
import ErrorBoundary from "./ErrorBoundary";
import { Home, Dashboard, Appointments, Error } from "./pages";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Layout } from "./pages/Layout";

export default function App() {
    return (
        <>
            <ErrorBoundary>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />}></Route>
                            <Route path="/dashboard" element={<Dashboard />}></Route>
                            <Route path="/appointments" element={<Appointments />}></Route>
                            <Route path="/account" element={<Error />}></Route>
                        </Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/register" element={<Register />}></Route>
                    </Routes>
                </BrowserRouter>
            </ErrorBoundary>
        </>
    );
}
