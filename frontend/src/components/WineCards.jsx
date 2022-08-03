import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import "./WineCards.css";
import bottle1 from "../utils/bottle1.png"



const WineCards = (props) => {

    const [hoverButton, setHoverButton] = useState(false);
    const mouseOverChevron = () => {
        setHoverButton(!hoverButton)
    };

   
const {id, wine, variety, year} = props;

    return (
        <div className="card-bg">              
            <div className="card-container">
                <div className="card-img">
                    <img src={bottle1} alt="wine" />
                </div>
                <div className="card-text">
                    <h3>Wine: {wine}</h3>
                    <p>Variety: {variety}</p>
                    <p>Year: {year}</p>              
                    <Link to={`/my-notes/${id}`} className="link-button">
                        <button className="read-more-button" onMouseOver={mouseOverChevron} onMouseLeave={mouseOverChevron}>See note <FaChevronRight className={hoverButton ? "svg-fill-white" : "null"} /></button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default WineCards;