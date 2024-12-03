import React, { useState } from 'react';
import { Container, Grid, Typography, Snackbar, Alert, Box } from '@mui/material';
import BookCard from '../components/BookCard';

const Books = ({ addNotification }) => {
  const [books, setBooks] = useState([
    // Add books with genres
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      isbn: '9780743273565',
      copiesAvailable: 3,
      cover: 'https://covers.openlibrary.org/b/id/8238696-L.jpg',
      genre: 'Fiction',
    },
    {
      id: 2,
      title: '1984',
      author: 'George Orwell',
      isbn: '9780451524935',
      copiesAvailable: 5,
      cover: 'https://covers.openlibrary.org/b/id/8225262-L.jpg',
      genre: 'Dystopian',
    },
    {
      id: 3,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      isbn: '9780061120084',
      copiesAvailable: 2,
      cover: 'https://covers.openlibrary.org/b/id/8225866-L.jpg',
      genre: 'Classics',
    },
    {
      id: 4,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      isbn: '9781503290563',
      copiesAvailable: 4,
      cover: 'https://covers.openlibrary.org/b/id/8181370-L.jpg',
      genre: 'Classics',
    },
    {
      id: 5,
      title: 'Moby-Dick',
      author: 'Herman Melville',
      isbn: '9781503280786',
      copiesAvailable: 6,
      cover: 'https://covers.openlibrary.org/b/id/8235189-L.jpg',
      genre: 'Classics',
    },
    {
      id: 6,
      title: 'War and Peace',
      author: 'Leo Tolstoy',
      isbn: '9780198800545',
      copiesAvailable: 7,
      cover: 'https://covers.openlibrary.org/b/id/8290935-L.jpg',
      genre: 'Classics',
    },
    {
      id: 7,
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      isbn: '9780316769488',
      copiesAvailable: 3,
      cover: 'https://covers.openlibrary.org/b/id/8262409-L.jpg',
      genre: 'Fiction',
    },
    {
      id: 8,
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      isbn: '9780345339683',
      copiesAvailable: 5,
      cover: 'https://covers.openlibrary.org/b/id/8271425-L.jpg',
      genre: 'Fantasy',
    },
    {
      id: 9,
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      isbn: '9780062315007',
      copiesAvailable: 8,
      cover: 'https://covers.openlibrary.org/b/id/8312872-L.jpg',
      genre: 'Adventure',
    },
     {
      id: 10,
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      isbn: '9780439023481',
      copiesAvailable: 4,
      cover: 'https://covers.openlibrary.org/b/id/8294372-L.jpg',
    },
      {
        id: 11,
        title: 'The Odyssey',
        author: 'Homer',
        isbn: '9780140268867',
        copiesAvailable: 5,
        cover: 'https://covers.openlibrary.org/b/id/8232995-L.jpg',
      },
      {
        id: 12,
        title: 'The Divine Comedy',
        author: 'Dante Alighieri',
        isbn: '9780451208637',
        copiesAvailable: 3,
        cover: 'https://covers.openlibrary.org/b/id/8252445-L.jpg',
      },
      {
        id: 13,
        title: 'Don Quixote',
        author: 'Miguel de Cervantes',
        isbn: '9780060934347',
        copiesAvailable: 6,
        cover: 'https://covers.openlibrary.org/b/id/8275577-L.jpg',
      },
      {
        id: 14,
        title: 'Anna Karenina',
        author: 'Leo Tolstoy',
        isbn: '9781853262715',
        copiesAvailable: 4,
        cover: 'https://covers.openlibrary.org/b/id/8283611-L.jpg',
      },
      {
        id: 15,
        title: 'The Picture of Dorian Gray',
        author: 'Oscar Wilde',
        isbn: '9780141441744',
        copiesAvailable: 7,
        cover: 'https://covers.openlibrary.org/b/id/8252354-L.jpg',
      },
      {
        id: 16,
        title: 'Frankenstein',
        author: 'Mary Shelley',
        isbn: '9780486282114',
        copiesAvailable: 5,
        cover: 'https://covers.openlibrary.org/b/id/8254349-L.jpg',
      },
      {
        id: 17,
        title: 'Brave New World',
        author: 'Aldous Huxley',
        isbn: '9780060850524',
        copiesAvailable: 8,
        cover: 'https://covers.openlibrary.org/b/id/8285106-L.jpg',
      },
      {
        id: 18,
        title: 'Crime and Punishment',
        author: 'Fyodor Dostoevsky',
        isbn: '9780486415871',
        copiesAvailable: 4,
        cover: 'https://covers.openlibrary.org/b/id/8292383-L.jpg',
      },
      {
        id: 19,
        title: 'The Brothers Karamazov',
        author: 'Fyodor Dostoevsky',
        isbn: '9780140449242',
        copiesAvailable: 3,
        cover: 'https://covers.openlibrary.org/b/id/8292666-L.jpg',
      },
      {
        id: 20,
        title: 'The Call of the Wild',
        author: 'Jack London',
        isbn: '9780486264721',
        copiesAvailable: 6,
        cover: 'https://covers.openlibrary.org/b/id/8232337-L.jpg',
      },
      {
        id: 21,
        title: 'The Secret Garden',
        author: 'Frances Hodgson Burnett',
        isbn: '9780141321067',
        copiesAvailable: 5,
        cover: 'https://covers.openlibrary.org/b/id/8252716-L.jpg',
      },
      {
        id: 22,
        title: 'Wuthering Heights',
        author: 'Emily Brontë',
        isbn: '9780141439556',
        copiesAvailable: 4,
        cover: 'https://covers.openlibrary.org/b/id/8243122-L.jpg',
      },
      {
        id: 23,
        title: 'The Scarlet Letter',
        author: 'Nathaniel Hawthorne',
        isbn: '9781505293564',
        copiesAvailable: 6,
        cover: 'https://covers.openlibrary.org/b/id/8281719-L.jpg',
      },
      {
        id: 24,
        title: 'The Grapes of Wrath',
        author: 'John Steinbeck',
        isbn: '9780143039433',
        copiesAvailable: 3,
        cover: 'https://covers.openlibrary.org/b/id/8283020-L.jpg',
      },
      {
        id: 25,
        title: 'Fahrenheit 451',
        author: 'Ray Bradbury',
        isbn: '9781451673319',
        copiesAvailable: 5,
        cover: 'https://covers.openlibrary.org/b/id/8279566-L.jpg',
      },
      {
        id: 26,
        title: 'The Hitchhiker\'s Guide to the Galaxy',
        author: 'Douglas Adams',
        isbn: '9780345391803',
        copiesAvailable: 6,
        cover: 'https://covers.openlibrary.org/b/id/8294120-L.jpg',
      },
      {
        id: 27,
        title: 'The Road',
        author: 'Cormac McCarthy',
        isbn: '9780307387899',
        copiesAvailable: 7,
        cover: 'https://covers.openlibrary.org/b/id/8282957-L.jpg',
      },
      {
        id: 28,
        title: 'Sapiens: A Brief History of Humankind',
        author: 'Yuval Noah Harari',
        isbn: '9780062316110',
        copiesAvailable: 8,
        cover: 'https://covers.openlibrary.org/b/id/8273455-L.jpg',
      },
      {
        id: 29,
        title: 'Educated: A Memoir',
        author: 'Tara Westover',
        isbn: '9780399590504',
        copiesAvailable: 4,
        cover: 'https://covers.openlibrary.org/b/id/8271573-L.jpg',
      },
      {
        id: 30,
        title: 'Becoming',
        author: 'Michelle Obama',
        isbn: '9781524763138',
        copiesAvailable: 3,
        cover: 'https://covers.openlibrary.org/b/id/8273021-L.jpg',
      },
      {
        id: 31,
        title: 'The Immortal Life of Henrietta Lacks',
        author: 'Rebecca Skloot',
        isbn: '9781400052189',
        copiesAvailable: 5,
        cover: 'https://covers.openlibrary.org/b/id/8273135-L.jpg',
      },
      {
        id: 32,
        title: 'The Diary of a Young Girl',
        author: 'Anne Frank',
        isbn: '9780553296983',
        copiesAvailable: 7,
        cover: 'https://covers.openlibrary.org/b/id/8282613-L.jpg',
      },
  ]);

  const [notification, setNotification] = useState({ open: false, message: '', severity: '' });
  const [borrowedBooksCount, setBorrowedBooksCount] = useState(0);

  // Example current user, you can replace this with actual user data
  const currentUser = {
    membershipTier: 'basic', // 'basic', 'premium', or 'VIP'
  };

  const maxBooks = {
    basic: 2,
    premium: 5,
    VIP: 10,
  };

  const handleAction = (book, action) => {
    if (action === 'borrow') {
      if (borrowedBooksCount < maxBooks[currentUser.membershipTier]) {
        if (book.copiesAvailable > 0) {
          setBooks((prevBooks) =>
            prevBooks.map((b) =>
              b.id === book.id ? { ...b, copiesAvailable: b.copiesAvailable - 1 } : b
            )
          );
          setBorrowedBooksCount(borrowedBooksCount + 1);
          const message = `${book.title} has been borrowed successfully!`;
          setNotification({ open: true, message, severity: 'success' });
          addNotification('Borrow Successful', message);
        } else {
          const message = `Sorry, no copies available for ${book.title}!`;
          setNotification({ open: true, message, severity: 'error' });
          addNotification('Borrow Failed', message);
        }
      } else {
        const message = `You can only borrow up to ${maxBooks[currentUser.membershipTier]} books at a time.`;
        setNotification({ open: true, message, severity: 'error' });
        addNotification('Borrow Limit Exceeded', message);
      }
    } else if (action === 'reserve') {
      if (book.copiesAvailable > 0) {
        const message = `${book.title} has been reserved!`;
        setNotification({ open: true, message, severity: 'success' });
        addNotification('Reserve Successful', message);
      } else {
        const message = `Sorry, no copies available to reserve for ${book.title}!`;
        setNotification({ open: true, message, severity: 'error' });
        addNotification('Reserve Failed', message);
      }
    }
  };

  // Group books by genre
  const groupedBooks = books.reduce((acc, book) => {
    if (!acc[book.genre]) {
      acc[book.genre] = [];
    }
    acc[book.genre].push(book);
    return acc;
  }, {});

  return (
    <Container>
      <Typography variant="h4" gutterBottom sx={{ marginTop: '20px' }}>
        Library Books
      </Typography>
      
      {/* Loop through each genre */}
      {Object.keys(groupedBooks).map((genre) => (
        <Box key={genre} sx={{ marginBottom: '40px' }}>
          <Typography variant="h5" sx={{ marginBottom: '20px' }}>
            {genre}
          </Typography>
          <Grid container spacing={3}>
            {groupedBooks[genre].map((book) => (
              <Grid item xs={12} sm={6} md={4} key={book.id}>
                <BookCard book={book} onAction={handleAction} />
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}

      {/* Notification Snackbar */}
      <Snackbar
        open={notification.open}
        autoHideDuration={3000}
        onClose={() => setNotification({ ...notification, open: false })}
      >
        <Alert
          onClose={() => setNotification({ ...notification, open: false })}
          severity={notification.severity}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Books;
