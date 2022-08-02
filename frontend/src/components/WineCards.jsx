import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import "./WineCards.css";



const WineCards = (props) => {

    const [hoverButton, setHoverButton] = useState(false);
    const mouseOverChevron = () => {
        setHoverButton(!hoverButton)
    };

   
const {id, image, wine, variety, year} = props;

    return (
        <div className="card-bg">              
            <div className="card-container">
                <div className="card-img">
                    <img src={image} alt="wine" />
                </div>
                <div className="card-text">
                    <h3>{wine}</h3>
                    <p>{variety}</p>
                    <p>{year}</p>              
                    <Link to={`/my-notes/${id}`} className="link-button">
                        <button className="read-more-button" onMouseOver={mouseOverChevron} onMouseLeave={mouseOverChevron}>See note <FaChevronRight className={hoverButton ? "svg-fill-white" : "null"} /></button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default WineCards;