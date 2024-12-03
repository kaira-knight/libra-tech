

import React from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { useSpring, animated } from 'react-spring';

const SideViewBar = () => {
  const role = localStorage.getItem('role'); // Retrieve the role from localStorage

  // Define role-based menu items
  const menuItems = role === 'user'
    ? [
        { label: 'Home', icon: <HomeIcon />, path: '/home' },
        { label: 'Books', icon: <MenuBookIcon />, path: '/books' },
        { label: 'Seat Booking', icon: <EventSeatIcon />, path: '/seat-booking' },
        { label: 'Notifications', icon: <NotificationsIcon />, path: '/notifications' },
        { label: 'Profile', icon: <AccountCircleIcon />, path: '/profile' },
      ]
    : [
        { label: 'Dashboard', icon: <DashboardIcon />, path: '/staff/dashboard' },
        { label: 'Borrowing Requests', icon: <AssignmentIcon />, path: '/borrowing-requests' },
        { label: 'Returning Updates', icon: <AssignmentIcon />, path: '/returning-updates' },
        { label: 'Book Inventory', icon: <LibraryBooksIcon />, path: '/book-inventory' },
        { label: 'Profile', icon: <AccountCircleIcon />, path: '/profile' },
      ];

  const springProps = useSpring({
    from: { transform: 'translateX(-100%)' },
    to: { transform: 'translateX(0)' },
    config: { duration: 500 },
  });

  return (
    <animated.div style={springProps}>
      <Drawer
        variant="permanent"
        sx={{
          width: 250,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 250,
            boxSizing: 'border-box',
            backgroundColor: '#f0f4f8', // Light background color
            color: '#374151', // Darker text for contrast
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
          },
        }}
      >
        {/* Sidebar Header */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 2,
            borderBottom: '1px solid #e5e7eb', // Subtle border for separation
          }}
        >
          <Typography variant="h6" color="#1f2937" fontWeight="bold">
            {role === 'user' ? 'User Portal' : 'Staff Portal'}
          </Typography>
        </Box>

        {/* Sidebar Menu Items */}
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              button
              component={Link}
              to={item.path}
              key={index}
              sx={{
                '&:hover': {
                  backgroundColor: '#e2e8f0', // Light hover color
                  transition: 'background-color 0.3s ease',
                },
                '& .MuiListItemIcon-root': {
                  color: '#6b7280', // Neutral gray icon color
                },
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: '#374151', // Text color for consistency
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </animated.div>
  );
};

export default SideViewBar;
