import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography, Grid, Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const ReturningUpdates = () => {
  const [returningData, setReturningData] = useState([]);
  const [overdueData, setOverdueData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [returnDate, setReturnDate] = useState('');

  useEffect(() => {
    // Simulate fetching returning data and overdue data from an API or database
    const sampleReturningData = [
      { id: 1, bookTitle: 'The Great Gatsby', userName: 'John Doe', borrowDate: '2024-11-01', returnDate: '2024-11-15', status: 'Pending' },
      { id: 2, bookTitle: '1984', userName: 'Jane Smith', borrowDate: '2024-10-15', returnDate: '2024-10-25', status: 'Returned' },
      // More data here...
    ];

    const sampleOverdueData = [
      { id: 1, bookTitle: 'Brave New World', userName: 'Emily White', overdueDays: 5 },
      { id: 2, bookTitle: 'Moby Dick', userName: 'Michael Brown', overdueDays: 3 },
      // More data here...
    ];

    setReturningData(sampleReturningData);
    setOverdueData(sampleOverdueData);
  }, []);

  // Handle the selection of a row in the table
  const handleRowSelection = (selected) => {
    if (selected.length > 0) {
      setSelectedRow(selected[0]);
    }
  };

  // Handle updating the return date and book status
  const handleReturnUpdate = () => {
    if (selectedRow !== null) {
      const updatedData = returningData.map((row) =>
        row.id === selectedRow ? { ...row, status: 'Returned', returnDate: returnDate } : row
      );
      setReturningData(updatedData);
      setReturnDate('');
      alert('Return updated successfully!');
    } else {
      alert('Please select a book to update.');
    }
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Returning Updates
      </Typography>

      {/* Display overdue books */}
      <Paper sx={{ padding: 2, marginBottom: 3 }}>
        <Typography variant="h6" gutterBottom>
          Overdue Books
        </Typography>
        <DataGrid
          rows={overdueData}
          columns={[
            { field: 'bookTitle', headerName: 'Book Title', width: 200 },
            { field: 'userName', headerName: 'User Name', width: 180 },
            { field: 'overdueDays', headerName: 'Overdue Days', width: 160 },
          ]}
          pageSize={5}
          disableSelectionOnClick
        />
      </Paper>

      {/* Display returning books */}
      <Paper sx={{ padding: 2 }}>
        <Typography variant="h6" gutterBottom>
          Books Pending Return
        </Typography>
        <DataGrid
          rows={returningData}
          columns={[
            { field: 'bookTitle', headerName: 'Book Title', width: 200 },
            { field: 'userName', headerName: 'User Name', width: 180 },
            { field: 'borrowDate', headerName: 'Borrow Date', width: 160 },
            { field: 'returnDate', headerName: 'Return Date', width: 160 },
            { field: 'status', headerName: 'Status', width: 120 },
          ]}
          pageSize={5}
          disableSelectionOnClick
          onSelectionModelChange={handleRowSelection}
          checkboxSelection
        />
      </Paper>

      {/* Update return details */}
      <Grid container spacing={2} sx={{ marginTop: 3 }}>
        <Grid item xs={12} md={6}>
          <TextField
            label="Return Date"
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleReturnUpdate}
            sx={{ padding: '10px 20px' }}
          >
            Update Return
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReturningUpdates;
