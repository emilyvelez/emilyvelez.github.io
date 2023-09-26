import React from 'react';
import './mainProfile.css';
import Section from './section';
import spotify from '../images/spotify.png';
import uoft from '../images/uoft.png';
import About from './about';
import netflix from '../images/netflix.webp';
import brainstation from '../images/brainstation.png';

function MainProfile(props) {
    let experiences = [
        {
            school_company_name: "Spotify",
            img_src: spotify,
            title_position: "Data Analyst",
            location: "New York, NY",
            start_date: "June 2019",
            end_date: "Pres",
            points: [
                "Point 1",
                "Point 2",
                "Point 3"
            ],
        },
        {
            school_company_name: "Netflix",
            img_src: netflix,
            title_position: "Senior Data Analyst",
            location: "New York, NY",
            start_date: "June 2019",
            end_date: "Pres",
            points: [
                "Point 1",
                "Point 2",
                "Point 3"
            ],
        },
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
                "Point 1",
                "Point 2",
                "Point 3"
            ],
        },
        {
            school_company_name: "University of Toronto",
            img_src: uoft,
            title_position: "Bachelors of Science in Neuroscience",
            location: "Toronto, Canada",
            start_date: "Sept 2014",
            end_date: "June 2018",
            points: [
                "Point 1",
                "Point 2",
                "Point 3"
            ],
        }
    ];

    let projects = [
        {

        },
        {

        }
    ];

    return (
        <div className="outer-div">
            <h2>Hola, I'm Emily Marie Velez</h2>
            <About/>
            <Section title="Experiences" data={experiences}/>
            <Section title="Education" data={education}/>
            {/*<Section title="Projects" data={projects}/> */}
        </div>
    )
}

export default MainProfile;
