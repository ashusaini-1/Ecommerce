import { Box } from "@mui/joy";

import List from "@mui/joy/List";
import ListSubheader from "@mui/joy/ListSubheader";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import {Link} from "react-router-dom"

function Footer() {
  return (
    <Box
      sx={{ backgroundColor: "black", color: "white", py: 4, marginTop: "10%" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { md: "flex-start" },
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 2,
          marginLeft: "10%",
        }}
      >
        <List
          size="sm"
          orientation="horizontal"
          wrap
          sx={{
            flexGrow: 0,
            "--ListItem-radius": "8px",
            "--ListItem-gap": "0px",
          }}
       
        >
          <ListItem nested sx={{ width: { xs: "50%", md: 140 } }}>
            <ListSubheader sx={{ fontWeight: "xl" }}>ABOUT US</ListSubheader>
            <List>
            <ListItem>
                <ListItemButton><Link to='/contact'>Contact Us</Link></ListItemButton>
              </ListItem>
           
              <ListItem>
                <ListItemButton><Link to='/about'>About Us</Link></ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Our Story</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Why Buy From Us</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Kisna CSR</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Corporate Gifting</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Our Blogs</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Press Room</ListItemButton>
              </ListItem>
            </List>
          </ListItem>
          <ListItem nested sx={{ width: { xs: "50%", md: 180 } }}>
            <ListSubheader sx={{ fontWeight: "xl" }}>
              JEWELLERY GUIDE
            </ListSubheader>
            <List sx={{ "--ListItemDecorator-size": "32px" }}>
              <ListItem>
                <ListItemButton>Buying & Price Guide</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Diamond Guide</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Jewellery Care Guide</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Cerification Guide</ListItemButton>
              </ListItem>
            </List>
          </ListItem>
          <ListItem nested sx={{ width: { xs: "50%", md: 180 } }}>
            <ListSubheader sx={{ fontWeight: "xl" }}>
              OUR POLICIES
            </ListSubheader>
            <List sx={{ "--ListItemDecorator-size": "32px" }}>
              <ListItem>
                <ListItemButton>Terms of Service</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Privacy Policy</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Shipping/Return Policy</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Buyback & Exchange Policy</ListItemButton>
              </ListItem>
            </List>
          </ListItem>
          <ListItem nested sx={{ width: { xs: "50%", md: 180 } }}>
            <ListSubheader sx={{ fontWeight: "xl" }}>
              USEFUL LINKS
            </ListSubheader>
            <List sx={{ "--ListItemDecorator-size": "32px" }}>
              <ListItem>
                <ListItemButton>Locate Our Stores</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Kisna Authorized Dealers</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Franchise Enquiry</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Careers</ListItemButton>
              </ListItem>
            </List>
          </ListItem>
          <ListItem nested sx={{ width: { xs: "50%", md: 180 } }}>
            <ListSubheader sx={{ fontWeight: "xl" }}>
              GET IN TOUCH
            </ListSubheader>
            <List sx={{ "--ListItemDecorator-size": "32px" }}>
              <ListItem>
                <ListItemButton>+9112324XXXXX</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>mail@gmail.com</ListItemButton>
              </ListItem>
            </List>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Footer;
