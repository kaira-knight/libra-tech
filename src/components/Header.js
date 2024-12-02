// File: src/components/Header.js

import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Badge, InputBase } from '@mui/material';
import { Search as SearchIcon, Notifications as NotificationsIcon, AccountCircle } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const location = useLocation();
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
    alert(`Searching for: ${searchTerm}`);
    setSearchTerm("");
  };

  const navigationLinks = [
    { label: "Home", path: "/" },
    { label: "Books", path: "/books" },
    { label: "Seat Booking", path: "/seat-booking" },
    { label: "Profile", path: "/profile" },
    { label: "Notifications", path: "/notifications" },
  ];

  return (
    <AppBar position="static">
      <Toolbar>
        {/* App Title */}
        <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
          LibraTech
        </Typography>

        {/* Search Bar */}
        <form onSubmit={handleSearchSubmit} style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
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
        <IconButton color="inherit" component={Link} to="/notifications">
          <Badge badgeContent={notificationsCount} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>

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
          <MenuItem onClick={() => alert("Logged out!")}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
