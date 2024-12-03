import React, { useState } from 'react';
import {
  Typography,
  List,
  ListItem,
  Divider,
  Button,
  Box,
  Avatar,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Snackbar,
  Alert,
  Card,
  CardContent,
} from '@mui/material';
import { useSpring, animated } from 'react-spring';

const Profile = () => {
  const [user, setUser] = useState({
    name: "Team Realistic",
    phoneNumber: "123-456-7890",
    email: "teamrealistic@sth24.com",
    membership: "Premium",
    username: "team_realistic",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/2/20/SITBihar.jpg",
    role: "user", // Could be 'user' or 'staff'
    department: "Library Management", // Applicable for staff
    borrowedBooks: [
      { title: "The Great Gatsby", dueDate: "2024-12-10" },
      { title: "Moby Dick", dueDate: "2024-12-15" },
    ],
  });

  const [editMode, setEditMode] = useState(false);
  const [avatarDialogOpen, setAvatarDialogOpen] = useState(false);
  const [newAvatar, setNewAvatar] = useState(user.avatar);
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);
  const [notification, setNotification] = useState({ open: false, message: '', severity: '' });

  // Animations
  const profileFadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 500 } });
  const bookListItemSpring = useSpring({ opacity: 1, transform: 'translateY(0)', from: { opacity: 0, transform: 'translateY(20px)' }, config: { duration: 500 } });

  const handleAvatarChange = () => {
    setUser((prevState) => ({ ...prevState, avatar: newAvatar }));
    setAvatarDialogOpen(false);
    setNotification({ open: true, message: 'Avatar updated successfully!', severity: 'success' });
  };

  const handleLogout = () => {
    setLogoutDialogOpen(false);
    setNotification({ open: true, message: 'You have logged out.', severity: 'info' });
  };

  const handleUpgradeMembership = () => {
    setUser((prevState) => ({ ...prevState, membership: prevState.membership === "Premium" ? "Elite" : "Premium" }));
    setNotification({ open: true, message: 'Membership upgraded successfully!', severity: 'success' });
  };

  const handleProfileUpdate = () => {
    setEditMode(false);
    setNotification({ open: true, message: 'Profile updated successfully!', severity: 'success' });
  };

  return (
    <div style={{ backgroundColor: '#f9f9f9', padding: '20px' }}>
      <animated.div style={profileFadeIn}>
        <Box display="flex" alignItems="center" justifyContent="space-between" mb={4}>
          <Typography variant="h4" color="primary">
            Profile
          </Typography>
          <Button variant="contained" color="error" onClick={() => setLogoutDialogOpen(true)}>
            Logout
          </Button>
        </Box>

        <Card sx={{ maxWidth: 600, margin: '0 auto', padding: '20px', boxShadow: 3 }}>
          <CardContent>
            <Box display="flex" alignItems="center" flexDirection="column" mb={3}>
              <Avatar src={user.avatar} alt="User Avatar" sx={{ width: 100, height: 100, marginBottom: 2 }} />
              <Button variant="outlined" onClick={() => setAvatarDialogOpen(true)}>
                Change Avatar
              </Button>
            </Box>

            <TextField label="Username" value={user.username} fullWidth margin="normal" disabled />
            <TextField
              label="Name"
              value={user.name}
              fullWidth
              margin="normal"
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              disabled={!editMode}
            />
            <TextField
              label="Phone"
              value={user.phoneNumber}
              fullWidth
              margin="normal"
              onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
              disabled={!editMode}
            />
            <TextField
              label="Email"
              value={user.email}
              fullWidth
              margin="normal"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              disabled={!editMode}
            />
            {user.role === 'staff' && (
              <TextField label="Department" value={user.department} fullWidth margin="normal" disabled />
            )}
            <Typography variant="body1" color="textSecondary" mt={2}>
              Membership: {user.membership}
            </Typography>

            <Box mt={3} display="flex" justifyContent="space-between">
              <Button variant="contained" color="primary" onClick={() => (editMode ? handleProfileUpdate() : setEditMode(true))}>
                {editMode ? 'Save' : 'Edit Profile'}
              </Button>
              <Button variant="contained" color="secondary" onClick={handleUpgradeMembership}>
                Upgrade Membership
              </Button>
            </Box>
          </CardContent>
        </Card>

        {user.role === 'user' && (
          <Box mt={8}>
            <Typography variant="h6" gutterBottom>
              Borrowed Books
            </Typography>
            <List>
              {user.borrowedBooks.map((book, idx) => (
                <animated.div style={bookListItemSpring} key={idx}>
                  <ListItem sx={{ padding: '10px', '&:hover': { backgroundColor: '#f1f1f1', cursor: 'pointer', borderRadius: '8px' }, transition: 'all 0.3s ease' }}>
                    <Typography variant="body1">
                      <strong>{book.title}</strong> - Due: {book.dueDate}
                    </Typography>
                  </ListItem>
                  {idx < user.borrowedBooks.length - 1 && <Divider />}
                </animated.div>
              ))}
            </List>
          </Box>
        )}
      </animated.div>

      {/* Avatar Dialog */}
      <Dialog open={avatarDialogOpen} onClose={() => setAvatarDialogOpen(false)}>
        <DialogTitle>Change Avatar</DialogTitle>
        <DialogContent>
          <TextField label="Avatar URL" fullWidth value={newAvatar} onChange={(e) => setNewAvatar(e.target.value)} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setAvatarDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleAvatarChange}>Change</Button>
        </DialogActions>
      </Dialog>

      {/* Logout Dialog */}
      <Dialog open={logoutDialogOpen} onClose={() => setLogoutDialogOpen(false)}>
        <DialogTitle>Logout</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to log out?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setLogoutDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleLogout}>Logout</Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar */}
      <Snackbar open={notification.open} autoHideDuration={3000} onClose={() => setNotification({ ...notification, open: false })}>
        <Alert severity={notification.severity}>{notification.message}</Alert>
      </Snackbar>
    </div>
  );
};

export default Profile;
