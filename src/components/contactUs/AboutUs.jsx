import { Paper, Typography } from "@mui/material";

const AboutUs = () => {
  return (
    <div style={{ padding: "16px" }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        About Us
      </Typography>
      <Paper style={{ padding: "16px", textAlign: "justify" }}>
        <Typography variant="body1" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu
          turpis et tellus mattis sagittis. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
          Morbi auctor tortor nec mi pretium, id fringilla ipsum vestibulum.
          Integer efficitur sagittis nunc, eu convallis mi rutrum eu.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Ut nec purus tellus. Cras faucibus felis ac
          diam malesuada tincidunt. Morbi eu mi sit amet urna rutrum tempor.
          Donec rutrum tortor non nulla interdum vestibulum. Nulla ac nulla a
          sapien fermentum ullamcorper nec ut elit. Phasellus id lectus at quam
          interdum lobortis. Proin tincidunt orci a risus efficitur, quis
          condimentum velit tristique. Mauris dapibus augue a libero iaculis
          scelerisque. Curabitur in orci eu lorem euismod dapibus.
        </Typography>
        <Typography variant="body1">
          Thank you for choosing Flipkart for all your shopping needs!
        </Typography>
      </Paper>
    </div>
  );
};

export default AboutUs;
