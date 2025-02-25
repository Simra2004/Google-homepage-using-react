import React, { useState } from "react";
import "./Navbar.css";
import menuImage from "../../assets/6dots.png"; 
import gmailimg from "../../assets/profile pic.png";
import gpic from "../../assets/Google__G__logo.svg.webp";
import plstore from "../../assets/google-play-store-new.png";
import gmailicon from "../../assets/GmailIcon.png";
import meeticon from "../../assets/meticon.png";
import driveicon from "../../assets/driveimg.png";
import contactsicon from "../../assets/contactsicon.png";
const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <a href="#">Gmail</a>
      <a href="#">Images</a>

      {/* Menu */}
      <img
        src={menuImage}
        alt="Menu"
        className="menu-icon"
        onClick={toggleDropdown} 
      />
 {/* Profile*/}
      <img
        src={gmailimg}
        alt="Profile"
        className="profile-icon"
      />
 {/* Dropdown */}
      {isOpen && (
        <div className="dropdown">
          <div className="dropdown-item">
            <img src={gpic}  alt="search" />
            <p>Search</p>
          </div>
          <div className="dropdown-item">
            <img src={plstore} alt="Play" />
            <p>Play</p>
          </div>
          <div className="dropdown-item">
            <img src={gmailicon} alt="Gmail" />
            <p>Gmail</p>
          </div>
          <div className="dropdown-item">
            <img src={meeticon} alt="Meet" />
            <p>Meet</p>
          </div>
          <div className="dropdown-item">
            <img src={driveicon} alt="Drive" />
            <p>News</p>
          </div>
          <div className="dropdown-item">
            <img src={contactsicon} alt="Contacts" />
            <p>Contacts</p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
