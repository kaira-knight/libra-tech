// File: src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Books from './pages/Books';
import SeatBooking from './pages/SeatBooking';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';
import { Container } from '@mui/material';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <Container style={{ flex: 1 }}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/seat-booking" element={<SeatBooking />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
