import React from 'react';
import { Container, Typography, Button, Grid, Card, CardContent, Box } from '@mui/material';
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
                    to="/borrowing-requests"
                    sx={{ mt: 2 }}
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
                    to="/returning-updates"
                    sx={{ mt: 2 }}
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
                    to="/book-inventory"
                    sx={{ mt: 2 }}
                  >
                    Manage Inventory
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </animated.div>
    </Container>
  );
};

export default StaffDashboard;
