import React, { useState } from 'react';
import { Button, Box, Typography, TextField, Container, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [role, setRole] = useState(""); // To track the selected role
  const [username, setUsername] = useState(""); // Track username input
  const [password, setPassword] = useState(""); // Track password input
  const [error, setError] = useState(""); // Track login errors
  const navigate = useNavigate();

  // Dummy credentials for user and staff
  const credentials = {
    user: { username: "customer1", password: "password123" },
    staff: { username: "staff1", password: "admin123" },
  };

  const handleLogin = (selectedRole) => {
    const validCreds = credentials[selectedRole];
    if (validCreds && username === validCreds.username && password === validCreds.password) {
      // Successful login
      localStorage.setItem('role', selectedRole);
      localStorage.setItem('username', username); // Optionally store username

      window.location.replace('/home');  // Redirect to /home

    } else {
      // Invalid login attempt
      setError("Invalid username or password. Please try again.");
    }
  };

  return (
    <Container maxWidth="xs">
      <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
        <Typography variant="h5" gutterBottom>Login</Typography>
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
