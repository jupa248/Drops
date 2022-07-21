import React from "react";
import  NavBar from "./NavBar";
import Notes from "./Notes";
import "./MyNotes.css";



const MyNotes = () => {
    return (
        <div className="myNotespage">
            <NavBar />
            <div className="my-notes-container">
                <p>Will display my notes here</p>
            </div>
            <div>
                <Notes />
            </div>    
        </div>
    )
}

export default MyNotes;