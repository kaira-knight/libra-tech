// File: src/pages/Profile.js

import React from 'react';
import { Typography, List, ListItem, Divider } from '@mui/material';

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
      <Typography variant="body1">Name: {user.name}</Typography>
      <Typography variant="body1">Membership: {user.membership}</Typography>
      <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>
        Borrowed Books
      </Typography>
      <List>
        {user.borrowedBooks.map((book, idx) => (
          <React.Fragment key={idx}>
            <ListItem>
              <Typography>
                {book.title} - Due: {book.dueDate}
              </Typography>
            </ListItem>
            {idx < user.borrowedBooks.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default Profile;
