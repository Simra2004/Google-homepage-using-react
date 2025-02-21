import React from "react";
import "./Navbar.css";
import image from "../../assets/6dots.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#">Gmail</a>
      <a href="#">Images</a>
      <img 
        src={image}
        alt="Menu"
        className="menu-icon"
      />
      <img 
        src="https://www.w3schools.com/howto/img_avatar.png"
        alt="Profile"
        className="profile-icon"
      />
    </nav>
  );
};

export default Navbar;
