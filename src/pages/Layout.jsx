import { Outlet } from "react-router-dom";
import Navbar from "../components/main/Navbar";

export function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}
