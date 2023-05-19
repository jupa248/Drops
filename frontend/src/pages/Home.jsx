import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import "./Home.css";
//import WineCards from "./WineCards";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

const Home = () => {
  const { user, notes } = useAppContext();

  //const [notes, setNotes] = useState([]);
  // useEffect(() => {
  //   const fetchNotes = async () => {
  //     try {
  //       // Retrieve the token and userId from local storage
  //       const token = localStorage.getItem("token");
  //       const userId = localStorage.getItem("userId");

  //       // Make the API call to fetch notes
  //       const response = await axios.get(`/notes/${userId}`, {
  //         headers: { Authorization: `Bearer ${token}` },
  //       });

  //       // Update the state with the fetched notes
  //       setNotes(response.data);
  //       //console.log(notes);
  //     } catch (error) {
  //       console.log("Fetch notes error:", error);
  //     }
  //   };

  //   fetchNotes();
  // }, []);
  console.log("notes", notes);
  const userData = user[0];
  console.log("userData", userData);

  return (
    <div>
      <NavBar />
      <h2>{userData?.username}</h2>
      {/* <div className="homepage">
        <div className="home-bg">
          <h2>Your latest notes...</h2>
          <div className="desk-home"> */}
      {/* {data
              .filter((wine, id) => id < 3)
              .map((wine) => (
                <WineCards {...wine} />
              ))} */}
      {/* </div>
          <div className="see-all">
            <div>
              <Link to="/create-notes">
                <button className="create-note-button">
                  {/* <img src={note} alt="" /> */}
      {/*} </button>
              </Link>
            </div>
            <div>
              <Link to="/my-notes">
                <button className="see-all-button">My notes</button>
              </Link>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
