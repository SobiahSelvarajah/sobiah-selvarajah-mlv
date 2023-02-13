import React from "react";
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/feather/menu";
import {x} from "react-icons-kit/feather/x";
// import "./Navbar.scss";

export default function Navbar() {

    return(
        <header className="navbar__header" id="navbar-header">
            <nav className="navbar container">
                <a href="#home" className="navbar__logo">MLV</a>
                <div className="navbar__menu" id="navbar-menu">
                    <ul className="navbar__list">
                        <li className="navbar__item">
                            <a href="#home" className="navbar__link active-link">
                                Home
                            </a>
                        </li>
                        <li className="navbar__item">
                            <a href="#about" className="navbar__link">
                                About
                            </a>
                        </li>
                        <li className="navbar__item">
                            <a href="#products" className="navbar__link">
                                Products
                            </a>
                        </li>
                        <li className="navbar__item">
                            <a href="#blog" className="navbar__link">
                                Blog
                            </a>
                        </li>
                    </ul>
                    
                    <div className="navbar__close" id="navbar-close">
                        <Icon icon={x} size={20}/>
                    </div>
                </div>
                
                <div className="navbar__toggle" id="navbar-toggle">
                    <Icon icon={menu} size={20}/>
                </div>
            </nav>
        </header>
    )
}