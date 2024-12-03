import React from 'react';
import { Box, Typography } from '@mui/material';
import { PieChart, Pie, Cell } from 'recharts'; // Assuming a chart library like recharts is used

const SeatBookingStatus = () => {
  const data = [
    { name: 'Booked', value: 120 },
    { name: 'Available', value: 80 },
  ];

  const COLORS = ['#0088FE', '#00C49F'];

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Seat Booking Status
      </Typography>
      <Typography variant="body1" gutterBottom>
        Visual representation of booked and available seats.
      </Typography>
      <PieChart width={400} height={400}>
        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={150} fill="#8884d8">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </Box>
  );
};

export default SeatBookingStatus;
