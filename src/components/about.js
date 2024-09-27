import React from "react";
import prof_pic from "../images/prof_pic.png";
import "./about.css";

function About(props) {
    return (
        <div className="about">
            <div><img src={prof_pic} alt="profile pic"/></div>
            <div className="about-content">
            From brain waves to bike lanes:<br />
            Innovating urban mobility marketing @ Bike Share Toronto
            </div>
        </div>
    )
}

export default About;