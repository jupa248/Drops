import React, { useEffect, useState } from "react";
import  NavBar from "./NavBar";
import "./MyNotes.css";
import "./HomePage.css"
import "./WineCards.css";
import axios from "axios";
import { Link , useParams } from "react-router-dom";
import bottle1 from "../utils/bottle1.png"
import { FaChevronRight } from "react-icons/fa";
import note from "../utils/note.png"




const MyNotes = () => {

    let param = useParams();
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

    const [hoverButton, setHoverButton] = useState(false);
    const mouseOverChevron = () => {
        setHoverButton(!hoverButton)
    };
    
   

    return (
      <div className="notesPage">
            <NavBar />
              <h2>My wine tasting notes</h2>
            <div className="myNotespage">
                {data.map((note, id) => (
                  <div className="myNotes-container">
                    <div className="card-img">
                        <img src={bottle1} alt="wine" />
                    </div>
                    <div className="card-text">
                        <h3>Wine: {note.wine}</h3>
                        <p>Variety: {note.variety}</p>
                        <p>Year: {note.year}</p>              
                        <Link to={`/single-note/${id}`} className="link-button">
                            <button className="read-more-button" onMouseOver={mouseOverChevron} onMouseLeave={mouseOverChevron}>See note <FaChevronRight className={hoverButton ? "svg-fill-white" : "null"} /></button>
                        </Link>
                    </div>
                  </div>
                  )
                  )}               
            </div>
            <div>
              <Link to="/create-notes" className="create-note-container">
                <button className="create-note-button"><img src={note} alt="" /></button>
              </Link>
            </div>            
      </div>
     )
  }

export default MyNotes;

//.filter((note) => note.id === +param.id)