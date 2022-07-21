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
            
          <div>
            {/* <h2>Top Rated:</h2> */}
          {wines.filter((wine) => wine.points === 99).map(
        (wine) => (
              <TopWines {...wine} />
          )
          )}
          </div>
          
         
        </div>
      </div>
    </div>
  )  
}

export default HomePage;

