import React from "react";
import HomepageFirstPic from "../../components/homepageFirstPic/HomepageFirstPic";
import HomepageText from "../../components/homepageText/HomepageText";
import './Homepage.scss';

const Homepage = () => {
    return(
        <div className="homepage__container">
            <HomepageFirstPic />
            <HomepageText />
        </div>
    )
}

export default Homepage;