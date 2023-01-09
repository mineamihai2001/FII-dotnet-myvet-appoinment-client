import React, { useState, useEffect } from "react";
import config from "../../config/config";
import { Link, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldDog } from "@fortawesome/free-solid-svg-icons";

import "../../styles/navbar.css";
import { useStorage } from "../../hooks/useStorage";

export default function ({ context: [user, setUser] }) {
    const pathname = window.location.pathname;
    const [active, setActive] = useState(pathname);
    const [storage, setStorage] = useStorage("user");

    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        setActive(path);
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
                                        <Link
                                            to={item.route}
                                            className={
                                                "nav-link " +
                                                (`/${active.split("/")[1]}` === item.route
                                                    ? "active"
                                                    : "")
                                            }
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                        <Link
                            to="/login"
                            className="btn btn-outline-secondary ms-3"
                            onClick={() => {
                                setUser(false);
                                setStorage({}); // empty the localStorage
                            }}
                        >
                            Logout
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}
