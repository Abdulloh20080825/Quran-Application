import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h2>Quran read listen and Learn</h2>
      </div>
      <div className="navbar-items">
        <Link to={'/djuz'}>
          <p>Djuz</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
