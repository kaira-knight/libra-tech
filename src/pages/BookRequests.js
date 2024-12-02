import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, List, ListItem, Divider } from '@mui/material';

const BookRequests = () => {
  const [requests, setRequests] = useState([
    { id: 1, title: "The Great Gatsby", user: "user123" },
    { id: 2, title: "Moby Dick", user: "user456" }
  ]);

  const handleApprove = (id) => {
    // Logic to approve the request
    console.log("Approved request", id);
    setRequests(requests.filter(request => request.id !== id));
  };

  const handleReject = (id) => {
    // Logic to reject the request
    console.log("Rejected request", id);
    setRequests(requests.filter(request => request.id !== id));
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Book Requests
      </Typography>
      <List>
        {requests.map((request) => (
          <React.Fragment key={request.id}>
            <ListItem>
              <Typography variant="body1">{request.title} (Requested by {request.user})</Typography>
              <Button color="success" onClick={() => handleApprove(request.id)} sx={{ marginLeft: 1 }}>Approve</Button>
              <Button color="error" onClick={() => handleReject(request.id)} sx={{ marginLeft: 1 }}>Reject</Button>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default BookRequests;
