import React, { createContext, useCallback, useEffect, useState } from "react";
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
import Protected from "./utils/Protected";

const Root = () => {
    const [user, setUser] = useState(false); // TODO: get state from localStorage

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Protected context={[user, setUser]} />,
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
                    element: <Login context={[user, setUser]} />,
                },
            ],
        },
        {
            path: "/register",
            element: <NoAuth />,
            children: [
                {
                    index: true,
                    element: <Register context={[user, setUser]} />,
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

    return <RouterProvider router={router} />;
};

export default Root;
