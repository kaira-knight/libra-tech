// File: src/components/BookCard.js

import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';

const BookCard = ({ book, onAction }) => {
  return (
    <Card sx={{ width: '100%', borderRadius: 2, boxShadow: 3 }}>
      {/* Full Cover Image with transparent background */}
      <CardMedia
        component="img"
        height="250" // Smaller size while maintaining full cover visibility
        image={book.cover}
        alt={book.title}
        sx={{
          objectFit: 'cover',
          backgroundColor: 'transparent', // Making the background transparent
        }}
      />
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          {book.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Author: {book.author}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          ISBN: {book.isbn}
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 1 }}>
          Copies Available: {book.copiesAvailable}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => onAction(book, 'borrow')}
          >
            Borrow
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            size="small"
            onClick={() => onAction(book, 'reserve')}
          >
            Reserve
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BookCard;
