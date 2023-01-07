import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
    Appointments,
    Dashboard,
    Home,
    Payment,
    Login,
    Register,
    Clients,
    Account,
    NoAuth,
} from "./pages";
import { ClientCardDetails, ClientCreate } from "./components/clients";
import { CardDetails, Create } from "./components/appointments";

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
                path: "clients",
                element: <Clients />,
                children: [
                    {
                        path: ":clientId",
                        element: <ClientCardDetails />,
                    },
                    {
                        index: true,
                        element: <ClientCreate />,
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
        element: <NoAuth />,
        children: [
            {
                index: true,
                element: <Login />,
            },
        ],
    },
    {
        path: "/register",
        element: <NoAuth />,
        children: [
            {
                index: true,
                element: <Register />,
            },
        ],
    },
    {
        path: "/payment",
        element: <NoAuth />,
        children: [
            {
                index: true,
                element: <Payment />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
