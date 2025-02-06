import React from 'react';
import './mainProfile.css';
import Section from './section';
// import spotify from '../images/spotify.webp';
import uoft from '../images/uoft.png';
import About from './about';
// import netflix from '../images/netflix.png';
import brainstation from '../images/brainstation.webp';
import fccf from '../images/fccf.png';
import hdlogo from '../images/hdlogo.png';
import shift from '../images/shiftlogo.png';
import download from '../images/download.png';
import letterboxd from '../images/letterboxd.png';
import hand from '../images/hand.png';
import './about.css';

function MainProfile(props) {
    let experiences = [
        {
            school_company_name: "The Home Depot",
            img_src: hdlogo,
            title_position: "Marketing Campaign Specialist",
            location: "Toronto, ON",
            start_date: "Feb 2025",
            end_date: "Present",
            points: [
                "More to come soon!",
                //"Conducted regular data pulls and analysis using Excel (VLOOKUP, PivotTables), to generate actionable insights, supporting data collection efforts and creating reports to identify trends and optimize processes",
                //"Collaborated cross-functionally with operations and customer service teams to drive business objectives and enhance operational efficiency"
            ],
        },
        {
            school_company_name: "Shift Transit",
            img_src: shift,
            title_position: "Marketing Analytics & User Acquisition Coordinator",
            location: "Toronto, ON",
            start_date: "June 2024",
            end_date: "Feb 2025",
            points: [
                "Led automation initiatives, engineering and implementing solutions that reduced manual workload by 13+ hours weekly and decreased project costs by 67%, significantly improving operational efficiency",
                "Conducted regular data pulls and analysis using Excel (VLOOKUP, PivotTables), to generate actionable insights, supporting data collection efforts and creating reports to identify trends and optimize processes",
                "Collaborated cross-functionally with operations and customer service teams to drive business objectives and enhance operational efficiency"
            ],
        },
        {
            school_company_name: "First Class Conferencing Facilitation",
            img_src: fccf,
            title_position: "Event & Digital Marketing Coordinator",
            location: "Toronto, ON",
            start_date: "May 2020",
            end_date: "May 2023",
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
            school_company_name: "University of Toronto",
            img_src: uoft,
            title_position: "Honours Bachelors of Science in Neuroscience",
            location: "Toronto, Canada",
            start_date: "2018",
            end_date: "2023",
            points: [
                "Activities and societies:",
                "Rock Climbing Club",
                "Cinema Students Union"
            ],
        },
        {
            school_company_name: "Brainstation",
            img_src: brainstation,
            title_position: "Data Analytics\nCertificate",
            location: "Toronto, Canada",
            start_date: "Oct 2023",
            //end_date: "Oct 2023",
            points: [
                "Applied data analysis strategies and problem-solving methodologies to real-world scenarios, mastering skills in data collection, cleaning, and interpretation",
                "Developed expertise in SQL, relational databases, and data normalization techniques for in-depth exploratory data analysis and management",
                "Conducted in-depth analysis of a Letterboxd dataset utilizing sentiment analysis techniques, revealing insights such as the dominance of drama, horror, and comedy genres, with drama being the most reviewed and horror experiencing exceptionally positive sentiments in 2022, showcasing expertise in natural language processing and statistical methods for data interpretation"
            ],
        }
    ];

    let projects = [
        {
            school_company_name: "",
            img_src: letterboxd,
            title_position: "Sentiment Analysis on Letterboxd Reviews",
            location: "Toronto, Canada",
            start_date: "Jan 2024",
            //end_date: "Pres",
            points: [
                "<a href='https://github.com/emilyvelez/LetterboxdProject' target='_blank'>GitHub Project</a>",
                // "Point 2",
                // "Point 3"
            ],
        },
    ];

    return (
        <div className="outer-div">
            <h2>Hola, I'm <span className="highlight">Emily Velez</span>  <img src={hand} alt="hand"/></h2> 
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
            <Section title="My Experience" data={experiences}/>
            <Section title="What I've Been Working On" data={projects}/>
            <Section title="My Background" data={education}/>
            
        </div>
    )
}

export default MainProfile;
