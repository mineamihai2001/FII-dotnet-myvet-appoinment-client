import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldDog } from "@fortawesome/free-solid-svg-icons";
import { Outlet } from "react-router-dom";
import config from "../config/config";

const NoAuth = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
                <div className="d">
                    <FontAwesomeIcon icon={faShieldDog} color="white" size="xl" className="px-3" />
                    <a className="navbar-brand" href="#">
                        {config.navbar.title}
                    </a>
                </div>
            </nav>
            <Outlet />
        </>
    );
};

export default NoAuth;
