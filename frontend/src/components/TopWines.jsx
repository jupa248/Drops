import React from "react";
import { wines } from "../utils/wines";
import "./TopWines.css";

//create wine cards

const TopWines = () => {
    return (
        <div className="top-wines-container">
        {wines.map((wine, title) => (
            <div className="top-wines">
                <p>{wine.points}</p>
                <p>{wine.title}</p>
                <p>{wine.description}</p>
                <p>{wine.price}</p>
                <p>{wine.designation}</p>
                <p>{wine.variety}</p>
                <p>{wine.region_1}</p>
                <p>{wine.region_2}</p>
                <p>{wine.province}</p>
                <p>{wine.country}</p>
                <p>{wine.winery}</p>
            </div>&&
            <div>
                <img src={wine.image} alt=""/>
            </div>
        ))}
        </div>
    );
    }

    export default TopWines;