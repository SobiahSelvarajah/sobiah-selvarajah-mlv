import React from "react";
import Navlist from "../navlist/Navlist";
import "./Navbar.scss";

export default function Navbar() {
    return(
        <div className="navbar__wrapper">
            <nav className="navbar__container">
                <h2 className="navbar__logo">MLV</h2>
                <Navlist />                
            </nav>
        </div>
    )
}