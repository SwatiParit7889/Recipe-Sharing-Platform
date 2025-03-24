import React from 'react'
import Navbar from './component/Navbar'
import { BrowserRouter as Router , Route, Routes, Navigate } from "react-router-dom";
import './App.css'
import Login from './component/pages/Login';
import Register from './component/pages/Register';
import Home from './component/pages/Home';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        /* Redirect to login if not logged in * /
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/home" element={<Home />} />
        
      </Routes>
    </Router>
    
    
    
      
  )
}

export default App
