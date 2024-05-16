import React from "react";
import prof_pic from "../images/prof_pic.png";
import "./about.css";

function About(props) {
    return (
        <div className="about">
            <div><img src={prof_pic} alt="profile pic"/></div>
            <div className="about-content">
            Results-Driven Coordinator with Startup Experience, Skilled in Data Analysis and Stakeholder Liaising
            </div>
        </div>
    )
}

export default About;