import React from "react";
import "./HomepageButton.scss";

export default function HomepageButton() {
    return(
        <div className="homepageButton__container">
            <a className="homepageButton__link">
                <button className="homepageButton__button">
                    Click to explore
                </button>
            </a>
        </div>
    )
}