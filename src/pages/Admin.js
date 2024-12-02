import React from 'react';
import { Typography, Button } from '@mui/material';

const Admin = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4">Admin Panel</Typography>
      <Button variant="contained" color="primary" style={{ margin: '10px 0' }}>
        Update Inventory
      </Button>
      <Button variant="contained" color="secondary" style={{ margin: '10px 0' }}>
        Process Payments
      </Button>
    </div>
  );
};

export default Admin;
