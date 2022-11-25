import React  from "react";
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./components/main/Navbar";
import ErrorBoundary from "./ErrorBoundary";
import config from "./config/config";
import MainPanel from "./components/main/MainPanel";


export default function App() {
    return <>
        <ErrorBoundary>
            <Navbar />
            <MainPanel />
        </ErrorBoundary>
    </>
}