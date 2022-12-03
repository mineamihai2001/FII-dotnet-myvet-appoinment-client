import React from "react";
import { BrowserRouter, Routes, Route, createBrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/main/Navbar";
import ErrorBoundary from "./ErrorBoundary";
import { Home, Dashboard, Appointments, Error } from "./pages";

export default function App() {
    return (
        <>
            <ErrorBoundary>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/dashboard" element={<Dashboard />}></Route>
                        <Route path="/appointments" element={<Appointments />}></Route>
                        <Route path="/account" element={<Error />}></Route>
                    </Routes>
                </BrowserRouter>
            </ErrorBoundary>
        </>
    );
}
