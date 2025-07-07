import { useState, useEffect, useRef } from 'react'
import mediscLogo from './assets/medisc-logo.png'
import snuhLogo from './assets/snuh-logo.svg'
import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

function App() {
  const [count, setCount] = useState(0)
  const [hideHeader, setHideHeader] = useState(false)
  const lastScroll = useRef(window.scrollY)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY
      if (currentScroll > lastScroll.current && currentScroll > 40) {
        setHideHeader(true)
      } else {
        setHideHeader(false)
      }
      lastScroll.current = currentScroll
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className={`header${hideHeader ? ' hide' : ''}`}>
        <a href="/" className="header-title" style={{ textDecoration: 'none' }}>
          Pose Box v0.1
        </a>
        <div className="header-logos">
          <a href="https://icmit.snuh.org" target="_blank" rel="noopener noreferrer">
            <img src={snuhLogo} className="header-logo" alt="SNUH logo" />
          </a>
          <div className="header-divider" />
          <a href="https://medisc.org" target="_blank" rel="noopener noreferrer">
            <img src={mediscLogo} className="header-logo" alt="MediSC logo" />
          </a>
        </div>
      </header>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
