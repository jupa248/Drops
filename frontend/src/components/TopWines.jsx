import React from "react";
import { wines } from "../utils/wines";
import "./TopWines.css";

//create wine cards



const TopWines = (props) => {

    const {points, title, price, designation, variety, region_1, province, country, winery, image} = props;

    return (
        <div className="top-wines-container">
            <div className="top-rated">Top rated</div>
            <div className="top-wines">
                <div>
                    <p>Points: {points}</p>
                    <p>Name: {title}</p>
                    <p>Price: {price}</p>
                    <p>Designation: {designation}</p>
                    <p>Variety: {variety}</p>
                    <p>Region: {region_1}</p>
                    <p>Province: {province}</p>
                    <p>Country: {country}</p>
                    <p>Winery: {winery}</p>
                </div>
                <div className="wine-img">
                    <img src={image} alt=""/>
                </div>
            </div>
        </div>
    );
    }


    export default TopWines;