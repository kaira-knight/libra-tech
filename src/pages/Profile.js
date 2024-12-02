// File: src/pages/Profile.js

import React from 'react';
import { Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

const Profile = () => {
  const user = {
    name: "John Doe",
    membership: "Premium",
    borrowedBooks: [
      { title: "The Great Gatsby", dueDate: "2024-12-10" },
      { title: "Moby Dick", dueDate: "2024-12-15" },
    ],
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Profile
      </Typography>
      <Typography variant="h6" gutterBottom>
        Name: {user.name}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Membership: {user.membership}
      </Typography>
      <Typography variant="h5" gutterBottom>
        Borrowed Books
      </Typography>
      <List>
        {user.borrowedBooks.map((book, index) => (
          <React.Fragment key={index}>
            <ListItem>
              <ListItemText primary={book.title} secondary={`Due Date: ${book.dueDate}`} />
            </ListItem>
            {index < user.borrowedBooks.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default Profile;
