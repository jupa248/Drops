import React, { useEffect, useState } from "react";
import  NavBar from "./NavBar";
import Notes from "./Notes";
import "./MyNotes.css";
import axios from "axios";




const MyNotes = () => {

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

    console.log(data)

    
    
    return (
      <div className="myNotespage">
            <NavBar />

                {data.map((note, id) => note.id < 5 ? (
                  
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
                    
                )
                : null)}
            
            <div>
                <Notes />
            </div>    
        </div>
    )
}

export default MyNotes;