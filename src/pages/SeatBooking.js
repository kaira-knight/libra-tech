// File: src/pages/SeatBooking.js

import React, { useState } from 'react';
import { Typography, Grid, Card, CardContent, Button } from '@mui/material';

const SeatBooking = () => {
  const [seats, setSeats] = useState(Array(20).fill(false));

  const handleBooking = (index) => {
    const updatedSeats = [...seats];
    updatedSeats[index] = !updatedSeats[index];
    setSeats(updatedSeats);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Seat Booking
      </Typography>
      <Grid container spacing={2}>
        {seats.map((occupied, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">Seat {index + 1}</Typography>
                <Typography variant="body2">
                  {occupied ? "Occupied" : "Available"}
                </Typography>
                <Button
                  variant="contained"
                  color={occupied ? "secondary" : "primary"}
                  onClick={() => handleBooking(index)}
                >
                  {occupied ? "Cancel" : "Book"}
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
