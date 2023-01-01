import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Error from "./pages/Error";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Appointments, Dashboard, Home } from "./pages";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CardDetails from "./components/appointments/CardDetails";
import Create from "./components/appointments/Create";
import Account from "./pages/Account";
import Patients from "./pages/Patients";
import PatientCardDetails from "./components/patients/PatientCardDetails";
import PatientCreate from "./components/patients/PatientCreate";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "dashboard",
                element: <Dashboard />,
            },
            {
                path: "appointments",
                element: <Appointments />,
                children: [
                    {
                        path: ":appointmentId",
                        element: <CardDetails />,
                    },
                    {
                        index: true,
                        element: <Create />,
                    },
                ],
            },
            {
                path: "patients",
                element: <Patients />,
                children: [
                    {
                        path: ":patientId",
                        element: <PatientCardDetails />,
                    },
                    {
                        index: true,
                        element: <PatientCreate />,
                    },
                ],
            },
            {
                path: "account",
                element: <Account />,
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
