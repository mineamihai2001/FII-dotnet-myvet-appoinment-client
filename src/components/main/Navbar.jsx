import React, {useState, useEffect} from "react";
import config from "../../config/config";
import { Outlet, Link, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldDog } from "@fortawesome/free-solid-svg-icons";

import "../../styles/navbar.css";

export default function () {
    const pathname = window.location.pathname;
    const [active, setActive] = useState(pathname);

    const location = useLocation();

    useEffect(() => {
        const path = location.pathname
        setActive(path)
    }, [location]);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
                <div className="container-fluid">
                    <FontAwesomeIcon icon={faShieldDog} color="white" size="xl" className="px-3" />
                    <a className="navbar-brand" href="#">
                        {config.navbar.title}
                    </a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {config.navbar.items.map((item) => {
                                return (
                                    <li className="nav-item">
                                        <Link to={item.route}
                                            className={
                                                "nav-link " +
                                                (active === item.route ? "active" : "")
                                            }
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                        <form className="d-flex">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-light" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}
