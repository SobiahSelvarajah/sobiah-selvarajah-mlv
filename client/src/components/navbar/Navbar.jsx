import React, {useState} from "react";
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/feather/menu";
import {x} from "react-icons-kit/feather/x";
import "./Navbar.scss";

export default function Navbar() {

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return(
        <nav className={toggle?"navbar__expanded" : "navbar__container"}>
            <h2 className="navbar__logo">MLV</h2>
            <ul className="navbar__list">
                <li className="navbar__item">
                    Home
                </li>
                <li className="navbar__item">
                    About
                </li>
                <li className="navbar__item">
                    Contact
                </li>
            </ul>
            <div className="navbar__button" onClick={handleToggle}>
                {toggle?<Icon icon={x} size={20}/>:<Icon icon={menu} size={20}/>}
            </div>                
        </nav>
    )
}