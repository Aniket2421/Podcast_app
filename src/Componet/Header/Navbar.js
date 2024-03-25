import React from "react";
import "./style.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation()
  const currentpath = location.pathname

  return (
    <div className="navbar">
      <div className="gradient"></div>
      <div className="links">
        <Link to="/" className={currentpath === "/" ? "active" : ""}>
          Signup
        </Link>
        <Link
          to="/podcasts"
          className={currentpath === "/podcasts" ? "active" : ""}
        >
          Podcasts
        </Link>
        <Link
          to="/create-a-podcast"
          className={currentpath === "/create-a-podcast" ? "active" : ""}
        >
          Start A Podcast
        </Link>
        <Link
          to="/profile"
          className={currentpath === "/profile" ? "active" : ""}
        >
          Profile
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
