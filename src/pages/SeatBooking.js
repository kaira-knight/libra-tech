// File: src/pages/SeatBooking.js

import React, { useState } from 'react';
import { Typography, Button, Grid, Card, CardContent } from '@mui/material';

const SeatBooking = () => {
  const [seats, setSeats] = useState(Array(20).fill(false)); // 20 seats (all unoccupied initially)

  const handleBooking = (index) => {
    const updatedSeats = [...seats];
    updatedSeats[index] = !updatedSeats[index]; // Toggle seat availability
    setSeats(updatedSeats);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Seat Booking
      </Typography>
      <Grid container spacing={2}>
        {seats.map((isOccupied, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">Seat {index + 1}</Typography>
                <Typography variant="body1">
                  {isOccupied ? "Occupied" : "Available"}
                </Typography>
                <Button
                  variant="contained"
                  color={isOccupied ? "secondary" : "primary"}
                  onClick={() => handleBooking(index)}
                >
                  {isOccupied ? "Cancel Booking" : "Book Seat"}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SeatBooking;
