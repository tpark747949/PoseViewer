
import React from 'react';
import { Link } from 'react-router-dom';
import snuhLogo from './assets/snuh-logo.svg'; // Import the logo
import mediscLogo from './assets/medisc-logo.png'; // Import the Medisc logo
import './App.css'; // Import your CSS file for styling

function App() {
  return (
    <div className="App">
      {/* Header with transparent navy blue background */}
      <header className="header">
        {/* SNUH Logo as a link */}
        <a href="https://icmit.snuh.org" target="_blank" rel="noopener noreferrer">
          <img src={snuhLogo} alt="SNUH Logo" className="logo" />
        </a>
        <div className="divider" />
        {/* Medisc Logo as a link */}
        <a href="https://medisc.org" target="_blank" rel="noopener noreferrer">
          <img src={mediscLogo} alt="Medisc Logo" className="logo" />
        </a>
        <div className="divider" />
        {/* App title as a link to home */}
        <Link to="/" className="app-title-link">
          <h1 className="app-title">PoseViewer</h1>
        </Link>
      </header>

      <div className="content">
        {/* Main content of the app */}
        <p>In progress...</p>
      </div>
    </div>
  );
}

export default App;
