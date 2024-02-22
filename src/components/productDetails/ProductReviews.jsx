import  { useState } from 'react';
import { Typography, Box, Rating, TextField, Button } from '@mui/material';

const ProductReviews = ({ reviews }) => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
    console.log('Submitted Review:', { name, rating, review });
  
    setName('');
    setRating(0);
    setReview('');
  };

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Product Reviews
      </Typography>
      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle1">Average Rating:</Typography>
        <Rating value={reviews.length > 0 ? calculateAverageRating(reviews) : 0} readOnly />
      </Box>
      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle1">Customer Reviews:</Typography>
        {reviews.map((review, index) => (
          <div key={index}>
            <Typography variant="body1">{review.name} - Rated {review.rating} stars</Typography>
            <Typography variant="body2">{review.text}</Typography>
          </div>
        ))}
      </Box>
      <Typography variant="h6" gutterBottom>
        Add Your Review
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          fullWidth
          label="Your Name"
          variant="outlined"
          value={name}
          onChange={handleNameChange}
          sx={{ mb: 2 }}
        />
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1">Rating:</Typography>
          <Rating
            value={rating}
            onChange={handleRatingChange}
            size="large"
          />
        </Box>
        <TextField
          required
          fullWidth
          label="Your Review"
          variant="outlined"
          multiline
          rows={4}
          value={review}
          onChange={handleReviewChange}
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit Review
        </Button>
      </form>
    </div>
  );
};

const calculateAverageRating = (reviews) => {
  const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
  return totalRating / reviews.length;
};

export default ProductReviews;
