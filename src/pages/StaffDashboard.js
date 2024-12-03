import React, { useState } from 'react';
import { Container, Typography, Button, Grid, Card, CardContent, Box, Snackbar, Alert } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

// StaffDashboard Component
const StaffDashboard = () => {
  // Animations for fade-in effects
  const fadeInProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
  });

  // Snackbar notification state
  const [notification, setNotification] = useState({ open: false, message: '', severity: '' });

  // Function to trigger notification
  const showNotification = (message, severity) => {
    setNotification({ open: true, message, severity });
  };

  return (
    <Container>
      <animated.div style={fadeInProps}>
        <Box sx={{ padding: 3, textAlign: 'center' }}>
          <Typography variant="h3" color="primary" gutterBottom>
            Welcome to the Staff Dashboard
          </Typography>
          <Typography variant="h5" color="textSecondary" paragraph>
            Manage book requests, inventory, seat bookings, and more from here.
          </Typography>

          {/* Grid layout for cards */}
          <Grid container spacing={4} justifyContent="center">
            {/* Borrowing Requests Card */}
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                <CardContent>
                  <Typography variant="h6" color="primary" gutterBottom>
                    Borrowing Requests
                  </Typography>
                  <Typography variant="body2" color="textSecondary" paragraph>
                    Approve or manage borrowing requests from users.
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    component={Link}
                    to="/staff/borrowing-requests"
                    sx={{ mt: 2 }}
                    onClick={() => showNotification('Navigating to Borrowing Requests', 'info')}
                  >
                    View Requests
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            {/* Returning Updates Card */}
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                <CardContent>
                  <Typography variant="h6" color="primary" gutterBottom>
                    Returning Updates
                  </Typography>
                  <Typography variant="body2" color="textSecondary" paragraph>
                    Monitor and update the status of returned books.
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    component={Link}
                    to="/staff/returning-updates"
                    sx={{ mt: 2 }}
                    onClick={() => showNotification('Navigating to Returning Updates', 'info')}
                  >
                    View Updates
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            {/* Book Inventory Management Card */}
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                <CardContent>
                  <Typography variant="h6" color="primary" gutterBottom>
                    Manage Book Inventory
                  </Typography>
                  <Typography variant="body2" color="textSecondary" paragraph>
                    Add, remove, or update books in the library's inventory.
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    component={Link}
                    to="/staff/book-inventory"
                    sx={{ mt: 2 }}
                    onClick={() => showNotification('Navigating to Book Inventory', 'info')}
                  >
                    Manage Inventory
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            {/* Seat Bookings Card */}
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                <CardContent>
                  <Typography variant="h6" color="primary" gutterBottom>
                    View Seat Bookings
                  </Typography>
                  <Typography variant="body2" color="textSecondary" paragraph>
                    Check and manage seat booking requests for users.
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    component={Link}
                    to="/staff/seat-bookings"
                    sx={{ mt: 2 }}
                    onClick={() => showNotification('Navigating to Seat Bookings', 'info')}
                  >
                    View Bookings
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            {/* Create Usernames & Passwords Card */}
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                <CardContent>
                  <Typography variant="h6" color="primary" gutterBottom>
                    Create Usernames & Passwords
                  </Typography>
                  <Typography variant="body2" color="textSecondary" paragraph>
                    Create new usernames and passwords for users and staff.
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    component={Link}
                    to="/admin/create-user"
                    sx={{ mt: 2 }}
                    onClick={() => showNotification('Navigating to Create Users', 'info')}
                  >
                    Create Users
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </animated.div>

      {/* Snackbar for Notifications */}
      <Snackbar
        open={notification.open}
        autoHideDuration={3000}
        onClose={() => setNotification({ ...notification, open: false })}
      >
        <Alert severity={notification.severity}>{notification.message}</Alert>
      </Snackbar>
    </Container>
  );
};

export default StaffDashboard;
