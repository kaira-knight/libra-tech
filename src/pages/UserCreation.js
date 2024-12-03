import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
  Paper,
} from '@mui/material';

const UserCreation = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [createdUsers, setCreatedUsers] = useState([]);

  const generatePassword = () => {
    return Math.random().toString(36).slice(-8); // Generate random 8-character password
  };

  const handleCreateUser = () => {
    if (username.trim() === '') {
      alert('Please enter a username.');
      return;
    }

    const newPassword = generatePassword();
    setCreatedUsers((prevUsers) => [
      ...prevUsers,
      { username, password: newPassword },
    ]);
    setPassword(newPassword);
    setUsername('');
  };

  return (
    <Container>
      <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          Create New User
        </Typography>
        <Box component="form" noValidate autoComplete="off" sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleCreateUser}
              >
                Create User
              </Button>
            </Grid>
          </Grid>
        </Box>

        {password && (
          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Typography variant="h6" color="textSecondary">
              User created successfully!
            </Typography>
            <Typography>
              Password: <strong>{password}</strong>
            </Typography>
          </Box>
        )}

        {createdUsers.length > 0 && (
          <Box sx={{ mt: 5 }}>
            <Typography variant="h6" gutterBottom>
              Created Users:
            </Typography>
            <ul>
              {createdUsers.map((user, index) => (
                <li key={index}>
                  {user.username} - {user.password}
                </li>
              ))}
            </ul>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default UserCreation;
