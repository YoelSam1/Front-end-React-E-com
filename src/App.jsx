// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppNavbar from './Components/Navbar'; // Updated import
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Home from './Pages/Home'; // Ensure Home component is defined and imported

const App = () => {
  return (
    <Router>
      <AppNavbar /> {/* Updated component name */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
