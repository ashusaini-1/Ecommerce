import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  OutlinedInput,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
// import {  Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [number, setNumber] = useState("");
  const [userName, setUserName] = useState("");

  const handleSignup = () => {};

  return (
    <Container component="main" maxWidth="xs">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sign Up
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          marginTop: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Create Account
        </Typography>
        <Box component="form" noValidate onSubmit={handleSignup} sx={{ mt: 1 }}>
          <FormControl sx={{ mt: 1, width: "100%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-userName">Name</InputLabel>
            <OutlinedInput
              id="outlined-adornment-userName"
              type="number"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              label="userName"
            />
          </FormControl>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <FormControl sx={{ mt: 1, width: "100%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-contact">
              Contact
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-contact"
              type="number" // Specify the input type as number
              value={number}
              onChange={(e) => {
                setNumber(e.target.value);
              }}
              label="Contact"
            />
          </FormControl>
          <FormControl sx={{ mt: 1, width: "100%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type="password" // Specify the input type as password
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              label="Password"
            />
          </FormControl>
          <FormControl sx={{ mt: 1, width: "100%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-confirm-password">
              Confirm Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              label="Confirm Password"
            />
          </FormControl>

          <Typography variant="body2" sx={{ mt: 1 }}>
            Already have an account?
            <Link to="/login">Click here to log in</Link>
          </Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Signup;
