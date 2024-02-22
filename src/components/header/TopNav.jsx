// import * as React from "react";
// import {
//   Typography,
//   Menu,
//   Container,
//   Avatar,
//   Tooltip,
//   MenuItem,
//   InputBase,
//   AppBar,
//   Box,
//   Toolbar,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// import SearchIcon from "@mui/icons-material/Search";
// import { styled, alpha } from "@mui/material/styles";

// const settings = ["Profile", "Account", "Dashboard", "Logout"];

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(1),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// // Adjusted StyledInputBase without the focus styling
// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   width: "100%",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),

//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     [theme.breakpoints.up("sm")]: {
//       width: "12ch",
//     },
//   },
// }));

// function TopNav() {
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const navigate = useNavigate();

//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseUserMenu = (setting) => {
//     setAnchorElUser(null);
//     if (setting === "Account") {
//       navigate("/login");
//     }

//     if (setting === "Profile") {
//       navigate("/user/profile");
//     }
//   };

//   return (
//     <AppBar
//       position="static"
//       style={{ position: "sticky", top: 0, zIndex: 999 }}
//     >
//       <Container maxWidth="xl" style={{ overflow: "visible" }}>
//         <Toolbar disableGutters>
//           <Box>
//             <Search>
//               <SearchIconWrapper>
//                 <SearchIcon />
//               </SearchIconWrapper>
//               <StyledInputBase
//                 placeholder="Search…"
//                 inputProps={{ "aria-label": "search" }}
//               />
//             </Search>
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <AccountCircleIcon onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </AccountCircleIcon>
//             </Tooltip>
//             <Menu
//               sx={{ mt: "45px" }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem
//                   key={setting}
//                   onClick={() => handleCloseUserMenu(setting)}
//                 >
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }

// export default TopNav;
