import React from "react";
import "./Navlist.scss";

export default function Navlist() {
    return(
        <ul className="navlist__container">
            <li className="navlist__link">
                HOME
            </li>
            <li className="navlist__link">
                ABOUT
            </li>
            <li className="navlist__link">
                CONTACT
            </li>
        </ul>
    )
}