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
            <div className="my-notes-container">
                {data.map(note => (
                    <div>
                        <p>{note.wine}</p>
                        <p>{note.year}</p>
                        <p>{note.body}</p>
                        <p>{note.aroma}</p>
                    </div>
                    
                ))}

                
            </div>
            <div>
                <Notes />
            </div>    
        </div>
    )
}

export default MyNotes;