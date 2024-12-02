import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import Books from './pages/Books';
import SeatBooking from './pages/SeatBooking';
import Notifications from './components/Notifications';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import Profile from './pages/Profile'; // Import the Profile component
import Login from './pages/Login'; // Import the Login page
import BookInventory from './pages/BookInventory'; // Import the Book Inventory page for staff

const App = () => {
  const [notifications, setNotifications] = useState([]);
  const [role, setRole] = useState(localStorage.getItem('role') || null);

  useEffect(() => {
    // Get the user role from localStorage
    const storedRole = localStorage.getItem('role');
    setRole(storedRole);
  }, []);

  // Add a new notification
  const addNotification = (title, message) => {
    setNotifications((prev) => [
      ...prev,
      { id: prev.length + 1, title, message },
    ]);
  };

  // Remove a notification
  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id));
  };

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('role');
    setRole(null);
  };

  return (
    <Router>
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        {/* Only show Sidebar if the user is logged in */}
        {role && <Sidebar />}

        {/* Main content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            backgroundColor: '#f5f5f5', // Light background for content
            padding: 3,
            overflow: 'auto',
          }}
        >
          <CssBaseline />
          {/* Header component only visible for users and staff */}
          {role && <Header onLogout={handleLogout} />}

          {/* Routing for different pages */}
          <Routes>
            {/* If no role is set (i.e., not logged in), show the login page */}
            {!role ? (
              <Route path="/" element={<Login />} />
            ) : (
              // If logged in as user or staff, show the app content
              <Route path="/" element={<Navigate to={role === 'staff' ? '/staff/dashboard' : '/home'} />} />
            )}

            {/* Home Page - Only accessible for users */}
            <Route path="/home" element={role === 'user' ? <HomePage /> : <Navigate to="/" />} />

            {/* Books Page - Only accessible for users */}
            <Route
              path="/books"
              element={role === 'user' ? <Books addNotification={addNotification} /> : <Navigate to="/" />}
            />

            {/* Seat Booking Page - Only accessible for users */}
            <Route
              path="/seat-booking"
              element={role === 'user' ? <SeatBooking addNotification={addNotification} /> : <Navigate to="/" />}
            />

            {/* Notifications Page - Only accessible for users */}
            <Route
              path="/notifications"
              element={
                role === 'user' ? (
                  <Notifications notifications={notifications} removeNotification={removeNotification} />
                ) : (
                  <Navigate to="/" />
                )
              }
            />

            {/* Profile Page - Only accessible for users */}
            <Route path="/profile" element={role === 'user' ? <Profile /> : <Navigate to="/" />} />

            {/* Staff Dashboard and Book Inventory - Only accessible for staff */}
            <Route
              path="/staff/dashboard"
              element={role === 'staff' ? <BookInventory /> : <Navigate to="/" />}
            />

          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
