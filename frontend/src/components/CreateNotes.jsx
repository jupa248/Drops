import React from "react";
import Navbar from "./NavBar";
import Notes from "./Notes";
import "./CreateNotes.css";

const CreateNotes = () => {
    return (
        <div className="create-page">
            <Navbar />
            <h2>Swirl, smell, taste...</h2>
            <div className="notes">
                <Notes />
            </div>    
        </div>
    )
}

export default CreateNotes;