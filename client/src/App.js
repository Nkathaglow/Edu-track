import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Auth from './Auth';
import Dashboard from './Dashboard';
import ProtectedRoute from './ProtectedRoute';
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="App">
        {/* Professional Navbar */}
        <header className="navbar" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          padding: '1rem 5%', 
          background: '#2c3e50', 
          color: 'white' 
        }}>
          <h1 style={{ fontSize: '1.5rem', margin: 0 }}>Edu-track</h1>
          <div className="nav-links">
            {/* Nav links can be added here if needed for public pages */}
          </div>
        </header>

        {/* Main Content Area */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          minHeight: 'calc(100vh - 70px)', 
          backgroundColor: '#f0f2f5' 
        }}>
          <Routes>
            {/* Both Login and Register now point to the Auth component */}
            <Route path="/login" element={<Auth />} />
            <Route path="/register" element={<Auth />} />
            
            {/* Protected Route for the Dashboard */}
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />

            {/* Default Route redirects to Login */}
            <Route path="/" element={<Navigate to="/login" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;