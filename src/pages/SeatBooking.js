// File: src/pages/SeatBooking.js

import React, { useState } from 'react';
import { 
  Box, Button, Typography, Grid, Paper, Container, 
  Snackbar, Alert, TextField, Dialog, DialogActions, 
  DialogContent, DialogTitle 
} from '@mui/material';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const SeatBooking = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [seatSelected, setSeatSelected] = useState(null);
  const [events, setEvents] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [userTier, setUserTier] = useState('basic'); // Options: basic, premium, vip
  const [eventToEdit, setEventToEdit] = useState(null);
  const [newEventTitle, setNewEventTitle] = useState('');
  const [openDialog, setOpenDialog] = useState(false);

  // Handle date selection from the calendar
  const handleDateSelect = (info) => {
    const today = new Date();
    const selectedDate = new Date(info.startStr);
    if (selectedDate < today) {
      setSnackbarMessage('You cannot book for past dates.');
      setSnackbarOpen(true);
      return;
    }
    setSelectedDate(info.startStr);
  };

  // Handle seat selection
  const handleSeatSelect = (seatNumber) => {
    setSeatSelected(seatNumber);
  };

  // Handle booking event (add event to calendar)
  const handleBookSeat = () => {
    if (selectedDate && seatSelected) {
      const seatLimit = userTier === 'basic' ? 2 : userTier === 'premium' ? 5 : 10;
      const bookedSeats = events.filter((event) => event.date === selectedDate).length;

      if (bookedSeats >= seatLimit) {
        setSnackbarMessage(`You can only book up to ${seatLimit} seats for this day.`);
        setSnackbarOpen(true);
        return;
      }

      const newEvent = {
        title: `Seat ${seatSelected}`,
        date: selectedDate,
        id: events.length + 1,
      };
      setEvents([...events, newEvent]);
      setSnackbarMessage(`Successfully booked Seat ${seatSelected} for ${selectedDate}`);
      setSnackbarOpen(true);
    } else {
      setSnackbarMessage('Please select a date and seat first.');
      setSnackbarOpen(true);
    }
  };

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', height: '100vh', padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Seat Booking
      </Typography>

      {/* Full Calendar */}
      <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          selectable
          select={handleDateSelect}
          events={events}
          editable={false}
          height="auto"
          validRange={{
            start: new Date().toISOString().split('T')[0],
          }}
        />
      </Box>

      {/* Seat Selection */}
      {selectedDate && (
        <Paper sx={{ padding: 3 }}>
          <Typography variant="h6" gutterBottom>
            Select Seat for {selectedDate}
          </Typography>
          <Grid container spacing={2}>
            {['A1', 'A2', 'A3', 'B1', 'B2', 'B3'].map((seat) => (
              <Grid item xs={4} sm={2} key={seat}>
                <Button
                  variant={seat === seatSelected ? 'contained' : 'outlined'}
                  onClick={() => handleSeatSelect(seat)}
                  fullWidth
                >
                  Seat {seat}
                </Button>
              </Grid>
            ))}
          </Grid>
          <Button variant="contained" onClick={handleBookSeat} fullWidth sx={{ marginTop: 2 }}>
            Book Seat
          </Button>
        </Paper>
      )}

      {/* Snackbar for Success Notification */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>

      {/* Dialog for Event Name Editing */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Edit Event</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Event Name"
            type="text"
            fullWidth
            value={newEventTitle}
            onChange={(e) => setNewEventTitle(e.target.value)}
            disabled
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={() => setOpenDialog(false)} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default SeatBooking;
