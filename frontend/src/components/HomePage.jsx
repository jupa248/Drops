import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import "./HomePage.css"
import WineCards from "./WineCards";
import axios from "axios";
import { Link } from "react-router-dom";
import note from "../utils/note.png"








function HomePage() {

  const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () =>{
        setLoading(true);
        try {
          const {data: response} = await axios.get("/notes/notes");
          setData(response);
        } catch (error) {
          console.error(error.message);
        }
        setLoading(false);
      }
  
      fetchData();
    }, []);



  return (
    <div>
      <NavBar />
      <div className="homepage">
        <div className="home-bg">
            
          <div>
            <h2>Recent tastes...</h2>
          {data.filter((wine, id) => id < 3).map(
            (wine) => (
              <WineCards {...wine} />
              )
              )}
          </div>
          <div className="see-all">
            <div>
              <Link to="/create-notes">
                <button className="create-note-button"><img src={note} alt="" /></button>
              </Link>
            </div>
            <div>
              <Link to="/my-notes">
                <button className="see-all-button">My notes</button>
              </Link>
            </div>
          </div>   
        </div>
      </div>
    </div>
  )  
}


export default HomePage;
              
              

