import React, { useEffect, useState } from "react";
import  NavBar from "./NavBar";
import "./MyNotes.css";
import "./HomePage.css"
import axios from "axios";
import { Link , useParams } from "react-router-dom";
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

   
    
    
    
    return (
      <div className="notesPage">
            <NavBar />
              <h2>My wine tasting notes</h2>
            <div className="myNotespage">
                {data.map((note, id) => (
                 <div className="myNotes"> 
                    <div className="myNotes-container">
                          <p>Name: {note.wine}</p>
                          <p>Tasting date: {note.date}</p>
                          <p>Price: €{note.price}</p>
                          <p>Year: {note.year}</p>
                          <p>Variety: {note.variety}</p>
                          <p>Winery: {note.winery}</p>
                          <p>Country/Region: {note.region}</p>
                          <p>Color: {note.color}</p>
                          <p>Aroma: {note.aroma}</p>
                          <p>Body: {note.body}</p>
                          <p>Taste: {note.taste}</p>
                          <p>Finish: {note.finish}</p>
                          <p>My notes: {note.mynotes}</p>
                      </div>
                    </div>
                )
                )}
                 <div className="create-container">
                    <Link to="/create-notes">
                        <button className="create-note-button"><img src={note} alt="" /></button>
                    </Link>
                  </div>
            </div>            
        </div>
    )
}

export default MyNotes;

//.filter((note) => note.id === +param.id)