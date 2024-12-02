import React, { useState, useEffect } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BookInventory = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [editedBookId, setEditedBookId] = useState(null);
  const [newCopies, setNewCopies] = useState('');

  // Simulate fetching book data
  useEffect(() => {
    // In real app, fetch data from an API or state management
    const fetchBooks = () => {
      const sampleBooks = [
        { id: 1, title: 'Book 1', author: 'Author 1', copies: 10 },
        { id: 2, title: 'Book 2', author: 'Author 2', copies: 5 },
        { id: 3, title: 'Book 3', author: 'Author 3', copies: 2 },
      ];
      setBooks(sampleBooks);
    };
    fetchBooks();
  }, []);

  const handleEditClick = (bookId) => {
    setEditedBookId(bookId);
    const bookToEdit = books.find(book => book.id === bookId);
    setNewCopies(bookToEdit.copies);
  };

  const handleSaveClick = (bookId) => {
    // Save the updated copies count
    setBooks((prevBooks) => 
      prevBooks.map((book) => 
        book.id === bookId ? { ...book, copies: newCopies } : book
      )
    );
    setEditedBookId(null);
    setNewCopies('');
  };

  const handleCancelClick = () => {
    setEditedBookId(null);
    setNewCopies('');
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" color="primary" gutterBottom>
        Book Inventory Management
      </Typography>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Title</strong></TableCell>
              <TableCell><strong>Author</strong></TableCell>
              <TableCell><strong>Available Copies</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((book) => (
              <TableRow key={book.id}>
                <TableCell>{book.title}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>
                  {editedBookId === book.id ? (
                    <TextField
                      type="number"
                      value={newCopies}
                      onChange={(e) => setNewCopies(e.target.value)}
                      variant="outlined"
                      size="small"
                      sx={{ width: 80 }}
                    />
                  ) : (
                    book.copies
                  )}
                </TableCell>
                <TableCell>
                  {editedBookId === book.id ? (
                    <>
                      <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={() => handleSaveClick(book.id)} 
                        sx={{ marginRight: 1 }}
                      >
                        Save
                      </Button>
                      <Button 
                        variant="outlined" 
                        color="secondary" 
                        onClick={handleCancelClick}
                      >
                        Cancel
                      </Button>
                    </>
                  ) : (
                    <Button 
                      variant="outlined" 
                      color="primary" 
                      onClick={() => handleEditClick(book.id)}
                    >
                      Edit
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default BookInventory;
