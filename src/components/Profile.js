import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [userType, setUserType] = useState('user'); // Default is normal user
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Dummy login logic, replace with actual authentication
    if (userType === 'admin' && username === 'admin' && password === 'admin123') {
      localStorage.setItem('isLoggedIn', 'admin');
      navigate('/profile');
    } else if (userType === 'user' && username && password) {
      localStorage.setItem('isLoggedIn', 'user');
      navigate('/profile');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Box sx={{ width: 400, padding: 3, boxShadow: 3, borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>Login</Typography>
        <TextField
          label="Username"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          fullWidth
          margin="normal"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Box mt={2}>
          <Button variant="contained" fullWidth color="primary" onClick={handleLogin}>
            Login as {userType === 'admin' ? 'Admin' : 'User'}
          </Button>
        </Box>
        <Box mt={2}>
          <Button
            variant="outlined"
            fullWidth
            color={userType === 'admin' ? 'secondary' : 'primary'}
            onClick={() => setUserType(userType === 'admin' ? 'user' : 'admin')}
          >
            Switch to {userType === 'admin' ? 'User' : 'Admin'} Login
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
