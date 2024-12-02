import React, { useEffect, useState } from 'react';
import { Box, Button, Typography, Grid, Paper, Container, Avatar, Divider } from '@mui/material';
import { useSpring, animated } from 'react-spring';
import { useNavigate } from 'react-router-dom';

// Mock data for popular books
const popularBooks = [
  { id: 1, title: 'The Great Gatsby', description: 'A classic novel by F. Scott Fitzgerald.' },
  { id: 2, title: '1984', description: 'A dystopian novel by George Orwell.' },
  { id: 3, title: 'To Kill a Mockingbird', description: 'A masterpiece by Harper Lee.' },
  { id: 4, title: 'Pride and Prejudice', description: 'A timeless romance by Jane Austen.' },
  { id: 5, title: 'The Catcher in the Rye', description: 'A controversial novel by J.D. Salinger.' },
  { id: 6, title: 'Moby Dick', description: 'An epic sea adventure by Herman Melville.' },
  { id: 7, title: 'The Hobbit', description: 'A fantasy novel by J.R.R. Tolkien.' },
];

const HomePage = () => {
  const navigate = useNavigate();
  const [recommendedBooks, setRecommendedBooks] = useState([]);

  // Spring animations
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 800 } });
  const slideIn = useSpring({ transform: 'translateY(0%)', from: { transform: 'translateY(100%)' }, config: { tension: 170, friction: 20 } });

  // Function to select random books
  const getRandomBooks = (books, count) => {
    const shuffled = [...books].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  useEffect(() => {
    // Set 3 random popular books as recommendations
    const randomBooks = getRandomBooks(popularBooks, 3);
    setRecommendedBooks(randomBooks);
  }, []);

  return (
    <Container maxWidth="lg" sx={{ padding: 3 }}>
      {/* Header Section */}
      <animated.div style={fadeIn}>
        <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
          Welcome Back!
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
          Your hub for seat booking, library exploration, and more.
        </Typography>
      </animated.div>

      {/* Main Action Sections */}
      <Grid container spacing={4} sx={{ marginTop: 3 }}>
        {/* Book a Seat Section */}
        <Grid item xs={12} sm={6} md={4}>
          <animated.div style={slideIn}>
            <Paper
              sx={{
                padding: 3,
                textAlign: 'center',
                borderRadius: 2,
                boxShadow: 3,
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            >
              <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56, margin: '0 auto', mb: 2 }}>
                🪑
              </Avatar>
              <Typography variant="h5" gutterBottom>
                Book a Seat
              </Typography>
              <Typography variant="body2" paragraph>
                Reserve your favorite spot for a productive day.
              </Typography>
              <Button variant="contained" color="primary" onClick={() => navigate('/seat-booking')}>
                Book Now
              </Button>
            </Paper>
          </animated.div>
        </Grid>

        {/* Browse Books Section */}
        <Grid item xs={12} sm={6} md={4}>
          <animated.div style={slideIn}>
            <Paper
              sx={{
                padding: 3,
                textAlign: 'center',
                borderRadius: 2,
                boxShadow: 3,
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            >
              <Avatar sx={{ bgcolor: 'secondary.main', width: 56, height: 56, margin: '0 auto', mb: 2 }}>
                📚
              </Avatar>
              <Typography variant="h5" gutterBottom>
                Explore Books
              </Typography>
              <Typography variant="body2" paragraph>
                Discover new and exciting books from our library.
              </Typography>
              <Button variant="contained" color="secondary" onClick={() => navigate('/books')}>
                Browse Library
              </Button>
            </Paper>
          </animated.div>
        </Grid>

        {/* Notifications Section */}
        <Grid item xs={12} sm={6} md={4}>
          <animated.div style={slideIn}>
            <Paper
              sx={{
                padding: 3,
                textAlign: 'center',
                borderRadius: 2,
                boxShadow: 3,
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            >
              <Avatar sx={{ bgcolor: 'success.main', width: 56, height: 56, margin: '0 auto', mb: 2 }}>
                🔔
              </Avatar>
              <Typography variant="h5" gutterBottom>
                Notifications
              </Typography>
              <Typography variant="body2" paragraph>
                Stay updated with the latest events and announcements.
              </Typography>
              <Button variant="contained" color="success" onClick={() => navigate('/notifications')}>
                View Alerts
              </Button>
            </Paper>
          </animated.div>
        </Grid>
      </Grid>

      {/* Personalized Recommendation Section */}
      <Box sx={{ marginTop: 6 }}>
        <Typography variant="h4" gutterBottom>
          Popular Books Recommendations
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Based on popular trends, here are some books you might enjoy!
        </Typography>
        <Divider sx={{ marginBottom: 3 }} />
        <Grid container spacing={3}>
          {recommendedBooks.length > 0 ? (
            recommendedBooks.map((book) => (
              <Grid item xs={12} sm={6} md={4} key={book.id}>
                <Paper
                  sx={{
                    padding: 2,
                    textAlign: 'center',
                    borderRadius: 2,
                    boxShadow: 3,
                    transition: 'transform 0.3s ease',
                    '&:hover': { transform: 'scale(1.03)' },
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    {book.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" paragraph>
                    {book.description}
                  </Typography>
                  <Button variant="outlined" color="primary" onClick={() => navigate(`/books/${book.id}`)}>
                    Learn More
                  </Button>
                </Paper>
              </Grid>
            ))
          ) : (
            <Typography variant="body1" align="center" sx={{ width: '100%' }}>
              No recommendations available at the moment.
            </Typography>
          )}
        </Grid>
      </Box>
    </Container>
  );
};

export default HomePage;
