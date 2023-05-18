import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import "./Home.css";
//import WineCards from "./WineCards";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get("/notes");
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="homepage">
        <div className="home-bg">
          <h2>Your latest notes...</h2>
          <div className="desk-home">
            {/* {data
              .filter((wine, id) => id < 3)
              .map((wine) => (
                <WineCards {...wine} />
              ))} */}
          </div>
          <div className="see-all">
            <div>
              <Link to="/create-notes">
                <button className="create-note-button">
                  {/* <img src={note} alt="" /> */}
                </button>
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
  );
};

export default Home;
