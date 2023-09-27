import React from "react";
import "./section.css";
import click from "../images/click.png";

function Section(props) {
    let [showContent, setShowContent] = React.useState(false);

    let handleClick = (data) => {
        // check screen size
        if (window.innerWidth < 768) {
            // if screen size is less than 768px, do nothing
            // put a message on the screen to tell the user to click on the item
            alert("This action is unavailable on Mobile. Please use a larger device to view more info about each section.");
            return;
        }

        console.log(data);
        setShowContent(!showContent);

        // Add a transparent color layer over the page
        let colorLayer = document.createElement("div");
        colorLayer.classList.add("color-layer");
        document.body.appendChild(colorLayer);

        // Add a modal to display the content
        let modal = document.createElement("div");
        modal.classList.add("modal");
        document.body.appendChild(modal);
        modal.innerHTML = `
                <div class="section-item-popup">
                    <div>
                        <img src=${data.img_src} alt="company logo"/>
                    </div>
                    <div>
                        ${data.school_company_name}
                    </div>
                    <div>
                        ${data.title_position}   
                    </div>
                    <div>
                        ${data.start_date} - ${data.end_date}
                    </div>
                </div>
                <div class="modal-content-points">
                    <ul>
                        ${(data.points).map((point, index) => {
                            return (
                                `<li key=${index}>${point}</li>`
                            );
                        }).join('')}
                    </ul>
                </div>
        `;

        // remove everything when the user clicks outside of the modal
        colorLayer.addEventListener("click", () => {
            colorLayer.remove();
            modal.remove();
        })
    }
    return (
        <div className="section">
            <h5>{props.title}</h5>
            <div className="section-content">
                {props.data.map((item, index) => {
                    return (
                        <div className="section-item" key={index} onClick={() => handleClick(item)}>
                            <div>
                                <img src={item.img_src} alt="company logo"/>
                            </div>
                            <div className="section-content-name">
                                {item.school_company_name}
                            </div>
                            <div className="section-content-position">
                                {item.title_position}   
                            </div>
                            {/* <div>
                                {item.location}
                            </div> */}
                            <div className="section-content-dates">
                                {item.start_date} - {item.end_date}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Section;