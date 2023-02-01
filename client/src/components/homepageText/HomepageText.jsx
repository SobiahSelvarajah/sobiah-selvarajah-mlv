import React from "react";
import logo from "../../assets/mlv-logo-files/resizable-vector-files/original.svg";
import HomepageButton from "../homepageButton/HomepageButton";
import "./HomepageText.scss";

export default function HomepageText() {
    return(
        <section className="homepageText__container">
            <img 
                className="homepageText__logo"
                src={logo}
                alt="logo"
            />
            <hr className="homepageText__line"/>
            <h4 className="homepageText__motto">
                Where drinks are served in style, with love.
            </h4>
            <HomepageButton />
        </section>
    )
}