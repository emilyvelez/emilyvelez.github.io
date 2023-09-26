import React from "react";
import "./section.css";

function Section(props) {
    return (
        <div className="section">
            <h5>My {props.title}</h5>
            <div className="section-content">
                {props.data.map((item, index) => {
                    return (
                        <div className="section-item" key={index}>
                            <div>
                                <img src={item.img_src} alt="company logo"/>
                            </div>
                            <div>
                                {item.school_company_name}
                            </div>
                            <div>
                                {item.title_position}   
                            </div>
                            <div>
                                {item.location}
                            </div>
                            <div>
                                {item.start_date} - {item.end_date}
                            </div>
                            {/* <div className="section-item-content">
                                <ul>
                                    {(item.points).map((point, index) => {
                                        return (
                                            <li key={index}>{point}</li>
                                        )
                                    })}
                                </ul>
                            </div> */}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Section;