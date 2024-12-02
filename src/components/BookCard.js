import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const BookCard = ({ book }) => {
  return (
    <Card style={{ margin: '10px', width: '300px' }}>
      <CardContent>
        <Typography variant="h5">{book.title}</Typography>
        <Typography variant="body1">{book.author}</Typography>
        <Typography variant="body2">
          {book.isAvailable ? "Available" : "Not Available"}
        </Typography>
        <Button 
          variant="contained" 
          color="primary"
          disabled={!book.isAvailable}
          style={{ marginTop: '10px' }}
        >
          Borrow
        </Button>
      </CardContent>
    </Card>
  );
};

export default BookCard;
