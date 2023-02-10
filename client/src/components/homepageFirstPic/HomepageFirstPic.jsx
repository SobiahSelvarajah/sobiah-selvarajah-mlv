import React from "react";
import coffee from "../../assets/images/coffee-heart.jpg";
import "./HomepageFirstPic.scss";

export default function HomepageFirstPic() {
    return(
        <img
            className="homepageFirstPic__image"
            src={coffee}
            alt="coffees"
        />
    )
}