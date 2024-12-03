import React, { useState } from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';

const CreateUser = () => {
  const [userDetails, setUserDetails] = useState({
    username: '',
    password: '',
    role: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCreateUser = () => {
    // Logic to create a new user (send data to backend, etc.)
    console.log('Creating user:', userDetails);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Create User
      </Typography>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          name="username"
          value={userDetails.username}
          onChange={handleChange}
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          name="password"
          type="password"
          value={userDetails.password}
          onChange={handleChange}
        />
        <TextField
          label="Role"
          variant="outlined"
          fullWidth
          name="role"
          value={userDetails.role}
          onChange={handleChange}
        />
      </Box>
      <Button variant="contained" color="primary" onClick={handleCreateUser}>
        Create User
      </Button>
    </Box>
  );
};

export default CreateUser;
