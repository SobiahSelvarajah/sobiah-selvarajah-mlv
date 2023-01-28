import React from "react";
import coffees from "../../assets/images/triple-coffee.jpg";
import "./HomepageFirstPic.scss";

export default function HomepageFirstPic() {
    return(
        <img
            className="homepageFirstPic__image"
            src={coffees}
            alt="coffees"
        />
    )
}