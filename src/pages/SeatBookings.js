import React, { useState } from 'react';
import { Box, Typography, List, ListItem, Divider } from '@mui/material';

const SeatBookings = () => {
  const [seatBookings, setSeatBookings] = useState([
    { id: 1, user: "user123", seat: "A1", time: "2024-12-10 10:00 AM" },
    { id: 2, user: "user456", seat: "B2", time: "2024-12-11 11:00 AM" }
  ]);

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Seat Bookings
      </Typography>
      <List>
        {seatBookings.map((booking) => (
          <React.Fragment key={booking.id}>
            <ListItem>
              <Typography variant="body1">{booking.user} booked Seat {booking.seat} for {booking.time}</Typography>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default SeatBookings;
