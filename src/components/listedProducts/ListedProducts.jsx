import  { useState, useEffect } from "react";
import { Grid, Typography, Card, Button, Paper, CardActions, CardContent, CardMedia } from "@mui/material";
import { useParams } from "react-router-dom";
import MobileJson from "../data/mobile.json";
import ClothesJson from "../data/Clothes.json";
import BookJson from "../data/book.json";

const ListedProducts = () => {
  const [jsonData, setJsonData] = useState([]);
  const { data } = useParams();

  useEffect(() => {
    if (data === "mobile") {
      setJsonData(MobileJson.Mobile);
    } else if (data === "clothes") {
      setJsonData(ClothesJson.clothes);
    } else if (data === "book") {
      setJsonData(BookJson.Books);
    }
  }, [data]);

  return (
    <Grid container spacing={2}>
      {jsonData.map((item) => (
        <Grid item key={item.id} xs={12} sm={6} md={3}>
        <Paper
            style={{
              marginLeft:'4%',
              padding: '20px',
              backgroundColor: '#253F4B',
              width: '80%',
              transition: 'transform 0.3s ease',
              "&:hover": {
                transform: 'scale(1.05)',
              },
            }}
          >
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
                {item.brand}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.model}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.storage}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.author}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.year_published}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Click Here</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default ListedProducts;
