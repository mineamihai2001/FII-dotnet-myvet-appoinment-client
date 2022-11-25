import React from "react";
import config from "../../config/config";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldDog, faHouse } from "@fortawesome/free-solid-svg-icons";

import "../../styles/navbar.css";

export default function () {
    const current = window.location.pathname;
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
                                        <a
                                            className={
                                                "nav-link " +
                                                (current === item.route ? "active" : "")
                                            }
                                            href={item.href}
                                        >
                                            {item.name}
                                        </a>
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
