// File: src/pages/Books.js

import React, { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import BookCard from '../components/BookCard';

const Books = () => {
  const [books, setBooks] = useState([
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', isAvailable: true },
    { title: '1984', author: 'George Orwell', isAvailable: false },
    { title: 'Moby Dick', author: 'Herman Melville', isAvailable: true },
  ]);

  const handleRequest = (book) => {
    alert(`Requested addition for: ${book.title}`);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Library Books
      </Typography>
      <Grid container spacing={3}>
        {books.map((book, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <BookCard book={book} onRequest={() => handleRequest(book)} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Books;
