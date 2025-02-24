import React, { useState } from "react";
import "./Navbar.css";
import menuImage from "../../assets/6dots.png"; 
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
        src="https://www.w3schools.com/howto/img_avatar.png"
        alt="Profile"
        className="profile-icon"
      />
 {/* Dropdown */}
      {isOpen && (
        <div className="dropdown">
          <div className="dropdown-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png" alt="search" />
            <p>Search</p>
          </div>
          <div className="dropdown-item">
            <img src="https://img.icons8.com/fluent/600/google-play-store-new.png" alt="Play" />
            <p>Play</p>
          </div>
          <div className="dropdown-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" alt="Gmail" />
            <p>Gmail</p>
          </div>
          <div className="dropdown-item">
            <img src="https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v1/web-96dp/logo_meet_2020q4_color_2x_web_96dp.png" alt="Meet" />
            <p>Meet</p>
          </div>
          <div className="dropdown-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3RaendkWxwbnlsA8UyDPmcDbqIMQETxKYpw&s" alt="Drive" />
            <p>News</p>
          </div>
          <div className="dropdown-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Google_Contacts_logo.png" alt="Contacts" />
            <p>Contacts</p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
