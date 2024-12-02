// File: src/components/Sidebar.js

import React from 'react';
import { List, ListItem, ListItemText, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ width: '250px', backgroundColor: '#f4f4f4', padding: '20px', height: '100vh' }}>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/books">
          <ListItemText primary="Books" />
        </ListItem>
        <ListItem button component={Link} to="/seat-booking">
          <ListItemText primary="Seat Booking" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/notifications">
          <ListItemText primary="Notifications" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/profile">
          <ListItemText primary="Profile" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
