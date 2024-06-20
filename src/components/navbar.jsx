import React from "react";
import { Link } from "react-router-dom";
import "./Style/navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">All Books</Link>
        <Link to="/search">Search Books</Link>
        <Link to="/read-status">Read Status</Link>
        <Link to="/genres">Genres</Link>
      </div>
    </div>
  );
};
