import React from "react";
import "./section.css";

function Section(props) {
    let [showContent, setShowContent] = React.useState(false);

    let handleClick = (data) => {
        console.log(data);
        setShowContent(!showContent);

        // Add a transparent color layer over the page
        let colorLayer = document.createElement("div");
        colorLayer.classList.add("color-layer");
        document.body.appendChild(colorLayer);
        colorLayer.style.backgroundColor = "#857ACBA1";
        colorLayer.style.zIndex = "1";
        colorLayer.style.position = "fixed";
        colorLayer.style.height = "100%";
        colorLayer.style.width = "100%";
        colorLayer.style.top = "0";

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
                            )
                        })}
                    </ul>
                </div>
        `;

        modal.style.zIndex = "2";
        modal.style.position = "fixed";
        modal.style.height = "70%";
        modal.style.width = "70%";
        modal.style.top = "15%";
        modal.style.left = "15%";
        modal.style.backgroundColor = "white";
        modal.style.borderRadius = "12px";
        modal.style.padding = "20px";
        modal.style.textAlign = "left";
        modal.style.color = "#000000";
        modal.style.boxShadow = "0px 14px 14px rgba(0, 0, 0, 0.25)";


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
                            <div>
                                {item.school_company_name}
                            </div>
                            <div>
                                {item.title_position}   
                            </div>
                            {/* <div>
                                {item.location}
                            </div> */}
                            <div>
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