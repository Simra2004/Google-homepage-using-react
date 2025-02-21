import React from "react";
import "./Searchbar.css";

const SearchBar = () => {
  return (
    <div className="search-container">
    <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/250px-Google_2015_logo.svg.png" 
        alt="Google Logo" 
        className="logo"
      />
      <div className="search-box">
        <input type="text" placeholder="Search Google or type a URL" />
      </div>
      <div className="buttons">
        <button>Google Search</button>
        <button>I'm Feeling Lucky</button>
      </div>
    </div>
  );
};

export default SearchBar;
