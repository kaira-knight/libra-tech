// File: src/components/Header.js

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Badge,
  InputBase,
} from '@mui/material';
import {
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  AccountCircle,
} from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({ onLogout }) => {
  const location = useLocation();
  const role = localStorage.getItem('role'); // Retrieve user role
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [notificationsCount] = useState(5); // Example: Mock notification count

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // For now, trigger an alert; you can replace this with navigation or API integration
    alert(`Searching for: ${searchTerm}`);
    setSearchTerm("");
  };

  // Role-based navigation links
  const navigationLinks =
    role === 'user'
      ? [
          { label: "Home", path: "/home" },
          { label: "Books", path: "/books" },
          { label: "Seat Booking", path: "/seat-booking" },
          { label: "Notifications", path: "/notifications" },
          { label: "Profile", path: "/profile" },
        ]
      : [
          { label: "Dashboard", path: "/staff/dashboard" },
          { label: "Borrowing Requests", path: "/borrowing-requests" },
          { label: "Returning Updates", path: "/returning-updates" },
          { label: "Book Inventory", path: "/book-inventory" },
          { label: "Profile", path: "/profile" },
        ];

  return (
    <AppBar position="static">
      <Toolbar>
        {/* App Title */}
        <Typography
          variant="h6"
          component={Link}
          to={role === 'user' ? "/home" : "/staff/dashboard"}
          sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}
        >
          LibraTech
        </Typography>

        {/* Search Bar */}
        <form
          onSubmit={handleSearchSubmit}
          style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}
        >
          <InputBase
            placeholder="Search…"
            value={searchTerm}
            onChange={handleSearchChange}
            sx={{
              backgroundColor: 'rgba(255,255,255,0.15)',
              padding: '0 10px',
              borderRadius: '4px',
              color: 'inherit',
              width: { xs: '100px', md: '200px' },
            }}
          />
          <IconButton type="submit" color="inherit">
            <SearchIcon />
          </IconButton>
        </form>

        {/* Notifications Icon */}
        {role === 'user' && (
          <IconButton color="inherit" component={Link} to="/notifications">
            <Badge badgeContent={notificationsCount} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        )}

        {/* Profile Dropdown */}
        <IconButton
          edge="end"
          color="inherit"
          aria-controls="profile-menu"
          aria-haspopup="true"
          onClick={handleMenuOpen}
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="profile-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem component={Link} to="/profile" onClick={handleMenuClose}>
            Profile
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleMenuClose();
              onLogout(); // Logout callback
            }}
          >
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
