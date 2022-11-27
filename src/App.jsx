import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, createBrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/main/Navbar";
import ErrorBoundary from "./ErrorBoundary";
import config from "./config/config";
import MainPanel from "./components/main/MainPanel";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

export default function App() {
    return (
        <>
            <ErrorBoundary>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/dashboard" element={<Dashboard />}></Route>
                    </Routes>
                </BrowserRouter>
            </ErrorBoundary>
        </>
    );
}
