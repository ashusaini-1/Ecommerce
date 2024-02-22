import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import List from "@mui/joy/List";

import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';


const pages = [
  "Grocery",
  "Mobiles",
  "Fashion",
  "Electronics",
  "Home & Furniture",
  "Appliances",
  "Travel",
  "Beauty,Toys & More",
  "Two Wheelers",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const FashionItem = [
  "Men's Top Wear",
  "Men's Bottom Wear",
  "Women's Top Wear",
  "Women's Bottom Wear",
  "Accessories",
  "Men's Footwear",
  "Women's Footwear",
  "Outerwear",
  "Dresses",
  "Suits",
  "Handbags",
  "Scarves",
  "Hats",
  "Belts",
  "Jewelry",
  "Sunglasses",
  "Watches",
  "Ties",
  "Gloves",
  "Socks",
];

const groceryItems = [
  "Apples",
  "Bananas",
  "Oranges",
  "Milk",
  "Bread",
  "Eggs",
  "Cheese",
  "Rice",
  "Pasta",
  "Tomatoes",
  "Potatoes",
  "Onions",
  "Carrots",
  "Broccoli",
  "Spinach",
  "Chicken",
  "Beef",
  "Fish",
  "Cereal",
  "Yogurt",
];

const electronicsItems = [
  "Smartphone",
  "Laptop",
  "Tablet",
  "Desktop Computer",
  "Headphones",
  "Bluetooth Speaker",
  "Smartwatch",
  "Television",
  "Digital Camera",
  "Printer",
  "Gaming Console",
  "Router",
  "External Hard Drive",
  "Wireless Earbuds",
  "Fitness Tracker",
];

const homeAppliancesItems = [
  "Refrigerator",
  "Microwave",
  "Coffee Maker",
  "Toaster",
  "Blender",
  "Dishwasher",
  "Washing Machine",
  "Dryer",
  "Air Conditioner",
  "Vacuum Cleaner",
  "Electric Kettle",
  "Food Processor",
  "Electric Oven",
  "Juicer",
  "Rice Cooker",
];



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

// Adjusted StyledInputBase without the focus styling
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
    },
  },
}));

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [hoveredPage, setHoveredPage] = React.useState(null); // State to track hovered page
  // const [listedProducts,setListedProducts]=React.useState("");



  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null);

    if (page === "Grocery") {
      setHoveredPage(page); // Set the hovered page to show dummy element
    } else if (page === "Mobiles") {
      setHoveredPage(page);
    } else if (page === "Fashion") {
      setHoveredPage(page);
    } else if (page === "Electronics") {
      setHoveredPage(page);
    } else if (page === "Home & Furniture") {
      setHoveredPage(page);
    } else if (page === "Appliances") {
      setHoveredPage(page);
    } else if (page === "Travel") {
      setHoveredPage(page);
    } else if (page === "Beauty,Toys & More") {
      setHoveredPage(page);
    } else if (page === "Two Wheelers") {
      setHoveredPage(page);
    } else {
      setHoveredPage(null); // Reset hovered page if not "RINGS"
    }
  };
  
  const handleCloseUserMenu = (setting) => {
    setAnchorElUser(null);
    if (setting === "Account") {
      navigate("/login");
    }

    if (setting === "Profile") {
      navigate("/user/profile");
    }
  };

  const handleListedProducts = (page) => {
    if (page === "Grocery") {
      navigate(`/product/categories/Grocery`);
    } else if (page === "Mobiles") {
      navigate(`/product/categories/mobile`);
    } else if (page === "Fashion") {
      navigate(`/product/categories/clothes`);
    } else if (page === "Electronics") {
      navigate(`/product/categories/Electronics`);
    } else if (page === "Home & Furniture") {
      navigate(`/product/categories/HomeFurniture`);
    } else if (page === "Appliances") {
      navigate(`/product/categories/Appliances`);
    } else if (page === "Travel") {
      navigate(`/product/categories/Travel`);
    } else if (page === "Beauty,Toys & More") {
      navigate(`/product/categories/book`);
    } else if (page === "Two Wheelers") {
      navigate(`/product/categories/TwoWheelers`);
    }
  };
  
  
  return (
    <AppBar
    position="static"
      style={{ position: "sticky", top: 0, zIndex: 999 }}
    >
      <Container maxWidth="xl" style={{ overflow: "visible" }}>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onMouseEnter={() => handleCloseNavMenu(page)}
                  
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
         
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onMouseOver={() => handleCloseNavMenu(page)}
                onClick={() => handleListedProducts(page, navigate)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <AccountCircleIcon onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </AccountCircleIcon>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={() => handleCloseUserMenu(setting)}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>

      {hoveredPage === "Fashion" && (
        <Box
          sx={{
            position: "absolute",
            top: "100%",
            left: 0,
            color: "white",
            width: "auto",
            backgroundColor: "white",
            padding: "10px",
            zIndex: 9999,
          }}
        >
          <List sx={{ width: "100%" }}>
            {FashionItem.map((item, index) => (
              <ListItem key={index}>
                <ListItemButton>{item}</ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
      {hoveredPage === "Grocery" && (
        <Box
          sx={{
            position: "absolute",
            top: "100%",
            left: 0,
            color: "white",
            width: "auto",
            backgroundColor: "white",
            padding: "10px",
            zIndex: 9999,
          }}
        >
          <List sx={{ width: "100%" }}>
            {groceryItems.map((item, index) => (
              <ListItem key={index}>
                <ListItemButton>{item}</ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      )}

      {hoveredPage === "Mobiles" && (
        <Box
          sx={{
            position: "absolute",
            top: "100%",
            left: 0,
            color: "white",
            width: "auto",
            backgroundColor: "white",
            padding: "10px",
            zIndex: 9999,
          }}
        >
          <List sx={{ width: "100%" }}>
            {homeAppliancesItems.map((item, index) => (
              <ListItem key={index}>
                <ListItemButton>{item}</ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
      {hoveredPage === "Electronics" && (
        <Box
          sx={{
            position: "absolute",
            top: "100%",
            left: 0,
            color: "white",
            width: "auto",
            backgroundColor: "white",
            padding: "10px",
            zIndex: 9999,
          }}
        >
          <List sx={{ width: "100%" }}>
            {electronicsItems.map((item, index) => (
              <ListItem key={index}>
                <ListItemButton>{item}</ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </AppBar>
  );
}

export default Navbar;
