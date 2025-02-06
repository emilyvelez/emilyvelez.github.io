import React from "react";
import prof_pic from "../images/prof_pic.png";
import "./about.css";

function About(props) {
    return (
        <div className="about">
            <div><img src={prof_pic} alt="profile pic"/></div>
            <div className="about-content">
            From softlines to strategic lines:<br />
            Crafting Campaign Excellence <br /><span className="highlight_hd"> @ The Home Depot</span>
            </div>
        </div>
    )
}

export default About;