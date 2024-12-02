// File: src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './components/Header';
import SideViewBar from './components/Sidebar';
import Home from './pages/Home';
import Books from './pages/Books';
import SeatBooking from './pages/SeatBooking';
import Profile from './pages/Profile';
import Notifications from './pages/Notifications';

const App = () => {
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        {/* Sidebar is always visible */}
        <SideViewBar />

        <Box sx={{ flexGrow: 1 }}>
          {/* Header */}
          <Header />

          {/* Main Content */}
          <Box sx={{ padding: 3 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/books" element={<Books />} />
              <Route path="/seat-booking" element={<SeatBooking />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/notifications" element={<Notifications />} />
            </Routes>
          </Box>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
