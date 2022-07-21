import React, {useState} from "react";
import "./Notes.css";
import { wines } from "../utils/wines";
import axios from "axios";
import {useNavigate} from 'react-router-dom'




function Notes() {
    const [notes, setNotes] = useState({})
    const navigate = useNavigate()

    const handleChange = (event) => {
      const {value, title} = event.target
      setNotes({...notes, [title]:value})
    }
  
    
    const handleSubmission = (event) => {
        event.preventDefault()
        console.log("note", notes)
        axios.post("/notes/insert", notes).then((response) => {
            console.log("response", response)
            alert('Note has been registered')
            navigate('/homepage')
        })
        .catch((error) => {
            alert(error)
        })
    }
        const handleSearch = (event) => {
            const {value} = event.target
            const filteredWines = wines.filter(wine => wine.title.toLowerCase().includes(value.toLowerCase()))
            console.log(filteredWines)
            setNotes(filteredWines)
        }

    return (

      <div className="notes-container" >
        <form onSubmit={handleSubmission}>
            <label>Wine</label>
            <input type="text" placeholder="Search" onChange={handleSearch}/>
            <label>Date</label>
            <input name='date' type='date' onChange={handleChange}/>
            <label>Price</label>
            <input name='price' type='number' onChange={handleChange}/>
            <label>Year</label>
            <input name='year' type='number'onChange={handleChange}/>
            <label>Variety</label>
            <input name='variety' type='text' onChange={handleChange}/>
            <label>Winery</label>
            <input name='winery' type='text' onChange={handleChange}/>
            <label>Region/Country</label>
            <input name='region' type='text' onChange={handleChange}/>
            <label>Color/Clarity</label>
            <input name='color' type='text' onChange={handleChange}/>
            <label>Aroma</label>
            <input name='aroma' type='text' onChange={handleChange}/>
            <label>Body</label>
            <input name='body' type='text' onChange={handleChange}/>
            <label>Taste</label>
            <input name='taste' type='text' onChange={handleChange}/>
            <label>Finish</label>
            <input name='finish' type='text' onChange={handleChange}/>
            <button type="submit" className="notes-button">Save</button>
        </form>
      </div>
    
    )
  }
  
  export default Notes;


