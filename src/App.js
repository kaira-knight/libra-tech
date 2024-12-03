import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import Books from './pages/Books';
import SeatBooking from './pages/SeatBooking';
import Notifications from './components/Notifications';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import UserDashboard from './pages/UserDashboard'; // For customers
import StaffDashboard from './pages/StaffDashboard'; // For staff
import BorrowingRequests from './pages/BorrowingRequests'; // For staff
import ReturningUpdates from './pages/ReturningUpdates'; // For staff
import BookInventory from './pages/BookInventory'; // For staff
import Login from './pages/Login'; // Starting point
import Profile from './pages/Profile'; // Profile Page
import UserCreation from './pages/UserCreation'; // staff

const App = () => {
  const [notifications, setNotifications] = useState([]);
  const [role, setRole] = useState(localStorage.getItem('role') || null);

  useEffect(() => {
    // Fetch the stored role on app load
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
        {/* Show Sidebar for logged-in users and staff */}
        {role && <Sidebar />}

        {/* Main Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            backgroundColor: '#f5f5f5',
            padding: 3,
            overflow: 'auto',
          }}
        >
          <CssBaseline />
          {/* Header component for users and staff */}
          {role && <Header onLogout={handleLogout} />}

          <Routes>
            {/* Default: Login page if no role is set */}
            {!role ? (
              <Route path="/" element={<Login />} />
            ) : (
              <Route
                path="/"
                element={<Navigate to={role === 'user' ? '/user-dashboard' : '/staff-dashboard'} />}
              />
            )}

            {/* Customer Routes */}
            {role === 'user' && (
              <>
                <Route path="/user-dashboard" element={<UserDashboard />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/books" element={<Books addNotification={addNotification} />} />
                <Route path="/seat-booking" element={<SeatBooking addNotification={addNotification} />} />
                <Route
                  path="/notifications"
                  element={
                    <Notifications notifications={notifications} removeNotification={removeNotification} />
                  }
                />
                <Route path="/profile" element={<Profile />} /> {/* Profile route */}
              </>
            )}

            {/* Staff Routes */}
            {role === 'staff' && (
              <>
                <Route path="/staff-dashboard" element={<StaffDashboard />} />
                <Route path="/borrowing-requests" element={<BorrowingRequests />} />
                <Route path="/returning-updates" element={<ReturningUpdates />} />
                <Route path="/book-inventory" element={<BookInventory />} />
                <Route path="/user-creation" element={<UserCreation />} />
                <Route path="/profile" element={<Profile />} /> {/* Profile route */}
              </>
            )}

            {/* Catch-all: Redirect to login */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
