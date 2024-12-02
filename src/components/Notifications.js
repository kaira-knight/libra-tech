// File: src/components/Notifications.js

import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Divider,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Notifications = ({ notifications, removeNotification }) => {
  return (
    <Box sx={{ padding: '20px', margin: '20px', background: '#f9f9f9', borderRadius: '8px' }}>
      <Typography variant="h4" sx={{ marginBottom: '20px' }}>
        Notifications
      </Typography>

      {/* List of Notifications */}
      <List>
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <React.Fragment key={notification.id}>
              <ListItem>
                <ListItemText
                  primary={notification.title}
                  secondary={notification.message}
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    onClick={() => removeNotification(notification.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
            </React.Fragment>
          ))
        ) : (
          <Typography variant="body1" sx={{ marginTop: '20px', color: '#777' }}>
            No notifications to display.
          </Typography>
        )}
      </List>
    </Box>
  );
};

export default Notifications;
