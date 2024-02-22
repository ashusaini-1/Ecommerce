import {
  Grid,
  Paper,
  Typography,
  Card,
  Button,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const data = [
  {
    id: 1,
    category: "Fashion",
    title: "Card 1",

    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdMYkyd_XqHcDqErnx5IeFpQm3Ho03pN3MmA&usqp=CAU",
    description: "Description for Card 1",
  },
  {
    id: 2,
    category: "Fashion",
    title: "Card 2",
    image:
      "https://img.freepik.com/free-photo/shiny-black-headphones-reflect-golden-nightclub-lights-generated-by-ai_188544-10148.jpg",
    description: "Description for Card 2",
  },
  {
    id: 3,
    category: "Fashion",
    title: "Card 1",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdMYkyd_XqHcDqErnx5IeFpQm3Ho03pN3MmA&usqp=CAU",
    description: "Description for Card 1",
  },
  {
    id: 4,
    category: "Mobile",
    title: "Card 2",
    image:
      "https://img.freepik.com/free-photo/shiny-black-headphones-reflect-golden-nightclub-lights-generated-by-ai_188544-10148.jpg",
    description: "Description for Card 2",
  },
  {
    id: 5,
    category: "Mobile",
    title: "Card 1",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdMYkyd_XqHcDqErnx5IeFpQm3Ho03pN3MmA&usqp=CAU",
    description: "Description for Card 1",
  },
  {
    id: 6,
    category: "Mobile",
    title: "Card 2",
    image:
      "https://img.freepik.com/free-photo/shiny-black-headphones-reflect-golden-nightclub-lights-generated-by-ai_188544-10148.jpg",
    description: "Description for Card 2",
  },
  {
    id: 7,
    category: "Accessories",
    title: "Card 1",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdMYkyd_XqHcDqErnx5IeFpQm3Ho03pN3MmA&usqp=CAU",
    description: "Description for Card 1",
  },
  {
    id: 8,
    category: "Accessories",
    title: "Card 2",
    image:
      "https://img.freepik.com/free-photo/shiny-black-headphones-reflect-golden-nightclub-lights-generated-by-ai_188544-10148.jpg",
    description: "Description for Card 2",
  },
];

const Body = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/product/detail");
  };

  // Grouping items by category
  const groupedData = data.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div>
      <Grid container justifyContent="center" alignItems="center">
        <Paper
          style={{
            padding: "20px",
            backgroundColor: "#253F4B",
            width: "100%",
          }}
        >
          <Typography variant="h4" align="center" sx={{ color: "#ffffff" }}>
            Welcome to Our Store
          </Typography>
        </Paper>
      </Grid>

      {Object.keys(groupedData).map((category) => (
        <div key={category}>
          <Typography variant="h5" mt={2}>
            {category}
          </Typography>
          <Grid container spacing={2}>
            {groupedData[category].map((item) => (
              <Grid item key={item.id} xs={12} sm={6} md={3}>
                <Card
                  sx={{
                    maxWidth: 345,
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                    transition: "0.3s",
                    "&:hover": {
                      boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <CardMedia
                    sx={{ height: 140 }}
                    image={item.image}
                    title={item.title}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ color: "#333333" }}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={handleNavigation}>
                      Click Here
                    </Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      ))}
    </div>
  );
};

export default Body;
