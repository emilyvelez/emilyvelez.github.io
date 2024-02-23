import React from "react";
import prof_pic from "../images/prof_pic.png";
import "./about.css";

function About(props) {
    return (
        <div className="about">
            <div><img src={prof_pic} alt="profile pic"/></div>
            <div className="about-content">
            Toronto-based data enthusiast exploring new opportunities to leverage my skills and passion for data
            </div>
        </div>
    )
}

export default About;