// Navbar.js
import React from 'react';
import './Navbar.css'; // Assuming you write styles in a separate file

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="#home">Home</a>
      <a href="#following">Following</a>
      <a href="#for-you">For You</a>
      <a href="#profile">Profile</a>
    </div>
  );
};

export default Navbar;
