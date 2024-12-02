import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const StaffDashboard = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to the Staff Dashboard
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
        <Button variant="contained" color="primary" component={Link} to="/staff/book-requests">
          Approve Book Requests
        </Button>
        <Button variant="contained" color="primary" component={Link} to="/staff/borrowing-requests">
          Manage Borrowing Requests
        </Button>
        <Button variant="contained" color="primary" component={Link} to="/staff/returning-updates">
          Manage Returning Updates
        </Button>
        <Button variant="contained" color="primary" component={Link} to="/staff/book-inventory">
          Update Book Inventory
        </Button>
        <Button variant="contained" color="primary" component={Link} to="/staff/seat-bookings">
          View Seat Bookings
        </Button>
      </Box>
    </Box>
  );
};

export default StaffDashboard;
