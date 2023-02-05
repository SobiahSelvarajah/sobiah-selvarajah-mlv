import React, {useState} from "react";
import Navlist from "../navlist/Navlist";
// import Navtoggle from "../navtoggle/Navtoggle";
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
        <div className="navbar__wrapper">
            <nav className={toggle?"navbar__expanded" : "navbar__container"}>
                <h2 className="navbar__logo">MLV</h2>
                <Navlist />    
                {/* <Navtoggle /> */}
                <div className="navbar__toggle" onClick={handleToggle}>
                    {toggle?<Icon icon={x} size={20}/>:<Icon icon={menu} size={20}/>}
                </div>
            </nav>
        </div>
    )
}