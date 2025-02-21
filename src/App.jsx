 {/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'*/}
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import Footer from "./components/Footer/Footer";
import "./index.css";

function App() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <Footer />
    </div>
  );
}

export default App;
