import React from "react";
import NavBar from "./NavBar";
import "./HomePage.css"
import { wines } from "../utils/wines"
import TopWines from "./TopWines";








function HomePage() {
  return (
    <div>
      <NavBar />
      <div className="homepage">
        <div className="home-bg">
          {wines.map((wine, title) => (
            
          <div className="top-wines">
           {
             (wine.points > 98 ? (
              <TopWines {...wine} />
            ) : (
              null)
          )
           }
          </div>
          
          ))}
        </div>
      </div>
    </div>
  )  
}

export default HomePage;

