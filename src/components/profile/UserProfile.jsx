import { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const UserProfile = () => {
  // Sample user data
  const [userData, setUserData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    bio: 'This is my bio...',
  });

  // Function to update user data
  const handleUpdateProfile = (updatedUserData) => {
    setUserData(updatedUserData);
  };

  return (
    <Container maxWidth="sm" height="10%">
      <Typography variant="h4" gutterBottom>
        User Profile
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {userData.firstName} {userData.lastName}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Email: {userData.email}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Bio: {userData.bio}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleUpdateProfile({ ...userData, bio: 'Updated bio...' })}
            sx={{ marginTop: '16px' }}
          >
            Update Bio
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default UserProfile;
