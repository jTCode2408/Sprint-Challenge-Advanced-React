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
          <h4>Dark</h4>
      <div className="dark__toggle">
        <div
        
          onClick={toggleMode} 
          className={darkMode ? 'toggle toggled' : 'toggle'} data-testid = " nav"
        />
      </div>
    </nav>
  );
};

export default Navbar;