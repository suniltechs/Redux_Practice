import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav >
        <h1>Grony</h1>
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to='/users'>Users</Link>
            <Link to='/newHome'>New Home</Link>
            <Link to='/fruits'>Fruits</Link>
        </div>
    </nav>
  );
};

export default Navbar;
 