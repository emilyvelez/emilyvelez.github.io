import React from 'react';
import './mainProfile.css';
import Section from './section';
import spotify from '../images/spotify.webp';
import uoft from '../images/uoft.png';
import About from './about';
import netflix from '../images/netflix.png';
import brainstation from '../images/brainstation.webp';
import fccf from '../images/FCCF.png';
import download from '../images/download.png';
import letterboxd from '../images/letterboxd.png';
import hand from '../images/hand.png';
import './about.css';
import click from '../images/click.png';

function MainProfile(props) {
    let experiences = [
        {
            school_company_name: "First Class Conferencing Facilitation",
            img_src: fccf,
            title_position: "Senior Web Conference Technician",
            location: "Toronto, ON",
            start_date: "June 2020",
            end_date: "May 2022",
            points: [
                "Excelled in organizing and facilitating full-day professional meetings on various conferencing platforms, providing seamless technical support to clients throughout the day",
                "Proactively identified and resolved technical issues, showcasing independent problem-solving abilities without needing explicit instructions",
                "Demonstrated strong verbal and written communication skills, ensuring clear and effective communication with clients during online meetings, legal hearings, webinars, and other virtual events"
            ],
        },
        // {
        //     school_company_name: "Netflix",
        //     img_src: netflix,
        //     title_position: "Senior Data Analyst",
        //     location: "New York, NY",
        //     start_date: "June 2019",
        //     end_date: "Pres",
        //     points: [
        //         "Point 1",
        //         "Point 2",
        //         "Point 3"
        //     ],
        // },
    ];

    let education = [
        {
            school_company_name: "BrainStation",
            img_src: brainstation,
            title_position: "Data Analytics Certificate",
            location: "Toronto, Canada",
            start_date: "Sept 2023",
            end_date: "Oct 2023",
            points: [
                "Applied data analysis strategies and problem-solving methodologies to real-world scenarios, mastering skills in data collection, cleaning, and interpretation",
                "Developed expertise in SQL, relational databases, and data normalization techniques for in-depth exploratory data analysis and management",
                "Conducted in-depth analysis of a Letterboxd dataset utilizing sentiment analysis techniques, revealing insights such as the dominance of drama, horror, and comedy genres, with drama being the most reviewed and horror experiencing exceptionally positive sentiments in 2022, showcasing expertise in natural language processing and statistical methods for data interpretation"
            ],
        },
        {
            school_company_name: "University of Toronto",
            img_src: uoft,
            title_position: "Honours Bachelors of Science (HBSc.) in Neuroscience",
            location: "Toronto, Canada",
            start_date: "Sept 2014",
            end_date: "June 2018",
            points: [
                "Activities and societies:",
                "Rock Climbing Club",
                "Cinema Students Union"
            ],
        }
    ];

    let projects = [
        {
            school_company_name: "",
            img_src: letterboxd,
            title_position: "Letterboxd Review Data Analysis",
            location: "Toronto, Canada",
            start_date: "Sept 2023",
            end_date: "Pres",
            points: [
                "Point 1",
                "Point 2",
                "Point 3"
            ],
        },
    ];

    return (
        <div className="outer-div">
            <h2>Hola, I'm <span className="highlight">Emily Marie Velez</span>  <img src={hand} alt="hand"/></h2> 
            <About/>
            <div className="resume">
                <div>
                    <h5>My Resume</h5>
                </div>
                <div className="download-button">
                    <a target="_blank" rel="noopenner" href="resume2023.pdf"> 
                        <img src={download} alt="download logo"/>
                    </a>
                </div>
            </div>
            <Section title="My Experiences" data={experiences}/>
            <Section title="My Background" data={education}/>
            <Section title="What I've Been Working On" data={projects}/>
        </div>
    )
}

export default MainProfile;
