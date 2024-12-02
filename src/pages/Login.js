import React, { useState } from 'react';
import { Button, Box, Typography, TextField, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [role, setRole] = useState(""); // To track the selected role (user or staff)
  const [username, setUsername] = useState(""); // Track username input
  const navigate = useNavigate();

  const handleLogin = (role) => {
    // Set the role in localStorage to simulate user login
    localStorage.setItem('role', role);
    localStorage.setItem('username', username); // Optionally store username for later use

    // Navigate to the correct dashboard based on the role
    if (role === "user") {
      navigate("/home");
    } else if (role === "staff") {
      navigate("/staff/dashboard");
    }
  };

  return (
    <Container maxWidth="xs">
      <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
        <Typography variant="h5" gutterBottom>Login</Typography>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Box display="flex" flexDirection="column" width="100%" mt={3}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleLogin('user')}
            sx={{ mb: 2 }}
          >
            Login as User
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleLogin('staff')}
          >
            Login as Staff
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
