// File: src/pages/Notifications.js

import React from 'react';
import { Typography, List, ListItem, Divider } from '@mui/material';

const Notifications = () => {
  const notifications = [
    "Return 'The Great Gatsby' by Dec 10th.",
    "'1984' is now available!",
    "Reminder: Seat Booking for Dec 4, 10 AM confirmed.",
  ];

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Notifications
      </Typography>
      <List>
        {notifications.map((note, idx) => (
          <React.Fragment key={idx}>
            <ListItem>
              <Typography variant="body1">{note}</Typography>
            </ListItem>
            {idx < notifications.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default Notifications;
