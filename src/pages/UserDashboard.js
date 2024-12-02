import React from 'react';
import { Box, Typography } from '@mui/material';

const UserDashboard = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4">User Dashboard</Typography>
      <Typography variant="body1" sx={{ marginTop: 2 }}>
        Here you can view your profile, borrow books, and more.
      </Typography>
    </Box>
  );
};

export default UserDashboard;
