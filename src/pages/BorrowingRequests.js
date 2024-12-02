import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, List, ListItem, Divider } from '@mui/material';

const BorrowingRequests = () => {
  const [borrowingRequests, setBorrowingRequests] = useState([
    { id: 1, title: "1984", user: "user123", dueDate: "2024-12-10" },
    { id: 2, title: "Brave New World", user: "user456", dueDate: "2024-12-15" }
  ]);

  const handleApproveBorrowing = (id) => {
    // Logic to approve borrowing
    console.log("Approved borrowing request", id);
    setBorrowingRequests(borrowingRequests.filter(request => request.id !== id));
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Borrowing Requests
      </Typography>
      <List>
        {borrowingRequests.map((request) => (
          <React.Fragment key={request.id}>
            <ListItem>
              <Typography variant="body1">{request.title} (Requested by {request.user}) - Due: {request.dueDate}</Typography>
              <Button color="success" onClick={() => handleApproveBorrowing(request.id)} sx={{ marginLeft: 1 }}>Approve</Button>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default BorrowingRequests;
