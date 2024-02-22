
import {
    Grid,
    Paper,
    Typography,
  
  } from "@mui/material";


const ContactUs= () => {
  return (
    <div style={{ padding: '16px' }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Contact Us
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper style={{ padding: '16px', textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Customer Service
            </Typography>
            <Typography variant="body1" gutterBottom>
              For any queries or issues related to orders, delivery, returns, or
              general assistance, please contact our customer service team.
            </Typography>
            <Typography variant="body1">
              Phone: 1-800-xxx-xxxx
            </Typography>
            <Typography variant="body1">
              Email: support@gmail.com
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper style={{ padding: '16px', textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Business Inquiries
            </Typography>
            <Typography variant="body1" gutterBottom>
              For business-related inquiries, partnerships, advertising, or other
              opportunities, please contact our business team.
            </Typography>
            <Typography variant="body1">
              Phone: 1-800-xxx-xxxx
            </Typography>
            <Typography variant="body1">
              Email: business@gmail.com
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactUs;
