import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";


const Podcastholder = ({ id, title, displayImage }) => {

  return (

    <Link to={`/podcast/${id}`}>
      <div className="podcast-card">
        <img className="display-image-podcast" src={displayImage} alt="img" />
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0rem .5rem"

        }}>
          <p className="title-podcast">{title}</p>
          <FaPlay />
        </div>
      </div>
    </Link>
  );
};

export default Podcastholder;
