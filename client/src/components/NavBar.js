import React, { useState, useEffect } from 'react';
import {useDarkMode} from '../hooks/useDarkMode';
const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  }
 
  return (
    <nav className="navbar">
      <div className="dark__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;