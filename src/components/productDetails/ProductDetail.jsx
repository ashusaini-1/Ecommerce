import { Grid, Paper, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import ProductReviews from './ProductReviews'; // Import the ProductReviews component

const ProductDetail = () => {
  // Sample array of reviews (for demonstration)
  const productReviews = [
    { name: 'John Doe', rating: 4, text: 'Great product, highly recommended!' },
    { name: 'Jane Smith', rating: 5, text: 'Excellent quality and fast delivery.' },
    { name: 'Anonymous', rating: 3, text: 'Average product, could be better.' }
  ];

  return (
    <Grid container spacing={3} >
      {/* Left side: Product image */}
      <Grid item xs={12} sm={6}>
        <Paper elevation={3} style={{ padding: "20px" }}>
          <img
    src=  "https://img.freepik.com/free-photo/shiny-black-headphones-reflect-golden-nightclub-lights-generated-by-ai_188544-10148.jpg"
            alt="Product"
            style={{ width: "100%" }}
          />
            <Button
            variant="contained"
            color="primary"
            style={{ marginRight: "10px" }}
          >
            Add to Cart
          </Button>
          <Button variant="contained" color="secondary">
            <Link to="/purchase"> Purchase</Link>
          </Button>
        </Paper>
      </Grid>

      {/* Right side: Product details */}
      <Grid item xs={12} sm={6}>
        <Paper elevation={3} style={{ padding: "20px" }}>
          <Typography variant="h5" gutterBottom>
            Product Name
          </Typography>
          <Typography variant="body1" gutterBottom>
            Product Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
          <Typography variant="h6" gutterBottom>
            $99.99
          </Typography>
          <Typography variant="body2" gutterBottom>
            Availability: In stock
          </Typography>
          <Typography variant="body2" gutterBottom>
            Brand: Brand Name
          </Typography>
        

          {/* ProductReviews section */}
          <ProductReviews reviews={productReviews} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ProductDetail;
