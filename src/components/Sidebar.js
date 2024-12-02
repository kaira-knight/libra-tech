// File: src/components/Sidebar.js

import React from 'react';
import { Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const SideViewBar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 250,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 250,
          boxSizing: 'border-box',
        },
      }}
    >
      <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <List>
          <ListItem button component={Link} to="/">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/books">
            <ListItemText primary="Books" />
          </ListItem>
          <ListItem button component={Link} to="/seat-booking">
            <ListItemText primary="Seat Booking" />
          </ListItem>
          <ListItem button component={Link} to="/profile">
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button component={Link} to="/notifications">
            <ListItemText primary="Notifications" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default SideViewBar;
