
import { Grid, Paper, Typography, TextField, Button } from '@mui/material';

const BuyNow = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your payment submission logic here
  };

  return (
    <Grid container justifyContent="center" alignItems="center" >
      <Grid item xs={10} sm={6} md={4}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h4" gutterBottom>
            Payment
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Card Number"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Expiration Date"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="CVV"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <Button type="submit"  variant="contained" color="primary">
              Pay Now
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default BuyNow;
