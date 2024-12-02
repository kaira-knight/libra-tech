// File: src/pages/Home.js

import React from 'react';
import { Typography } from '@mui/material';

const Home = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Welcome to LibraTech Library
      </Typography>
      <Typography variant="body1">
        Navigate through the sidebar to explore features like book browsing, seat booking, notifications, and more.
      </Typography>
    </div>
  );
};

export default Home;
