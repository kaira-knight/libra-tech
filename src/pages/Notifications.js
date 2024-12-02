// File: src/pages/Notifications.js

import React from 'react';
import { Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

const Notifications = () => {
  const notifications = [
    "Book '1984' is now available for borrowing.",
    "Return deadline for 'The Great Gatsby' is tomorrow.",
    "You have successfully borrowed 'Moby Dick'.",
  ];

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Notifications
      </Typography>
      <List>
        {notifications.map((notification, index) => (
          <React.Fragment key={index}>
            <ListItem>
              <ListItemText primary={notification} />
            </ListItem>
            {index < notifications.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default Notifications;
