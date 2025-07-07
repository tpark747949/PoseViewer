import React from 'react';
import snuhLogo from './assets/snuh-logo.svg'; // Import the logo
import mediscLogo from './assets/medisc-logo.png'; // Import the Medisc logo
import './App.css'; // Import your CSS file for styling

function App() {
  return (
    <div className="App">
      {/* Header with transparent navy blue background */}
      <header className="header">
        <img src={snuhLogo} alt="SNUH Logo" className="logo" />
        <div className="divider" />
        <img src={mediscLogo} alt="Medisc Logo" className="logo" />
        <div className="divider" />
        <h1 className="app-title">PoseViewer</h1>
      </header>

      <div className="content">
        {/* Main content of the app */}
        <p>Welcome to PoseViewer!</p>
      </div>
    </div>
  );
}

export default App;
