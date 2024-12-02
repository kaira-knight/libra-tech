import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import Books from './pages/Books';
import SeatBooking from './pages/SeatBooking';
import Notifications from './components/Notifications';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';

const App = () => {
  const [notifications, setNotifications] = useState([]);

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

  return (
    <Router>
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        {/* Sidebar */}
        <Sidebar />
        
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
          <Header />
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<HomePage />} />

            {/* Books Page */}
            <Route
              path="/books"
              element={<Books addNotification={addNotification} />}
            />

            {/* Seat Booking Page */}
            <Route
              path="/seat-booking"
              element={<SeatBooking addNotification={addNotification} />}
            />

            {/* Notifications Page */}
            <Route
              path="/notifications"
              element={
                <Notifications
                  notifications={notifications}
                  removeNotification={removeNotification}
                />
              }
            />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
