import {useState} from 'react'
import { Grid, Paper, Typography, TextField, Button } from '@mui/material';

const AddProducts = () => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [images, setImages] = useState([]);

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleImageChange = (event) => {
    // Handle image upload here
    const selectedImages = Array.from(event.target.files);
    setImages(selectedImages);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your submit logic here
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
      <Grid item xs={10} sm={6} md={4}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h4" gutterBottom>
            Add Product{images}
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Product Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={productName}
              onChange={handleProductNameChange}
              required
            />
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              margin="normal"
              multiline
              rows={4}
              value={description}
              onChange={handleDescriptionChange}
              required
            />
            <TextField
              label="Price"
              variant="outlined"
              fullWidth
              margin="normal"
              type="number"
              value={price}
              onChange={handlePriceChange}
              required
            />
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              style={{ margin: '10px 0' }}
            />
            <Button type="submit" variant="contained" color="primary">
              Add Product
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AddProducts;
