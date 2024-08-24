import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
} from "@mui/material";

const LifeUpdate = () => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "100%", // Ensure it fits within its container
        height: "100%", // Allow height to be controlled by container
        boxShadow: 3,
      }}
    >
      <CardMedia
        component="img"
        height="10"
        image="https://via.placeholder.com/300" // Replace with your image URL
        alt="Life Update"
      />
      <CardContent sx={{ flex: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          Life Update
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          August 2024
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Just got a new job as a Software Engineer! Excited to start this new
          journey and learn as much as I can. Feeling grateful for all the
          support.
        </Typography>
        <Typography variant="h6" component="div" sx={{ mt: 2 }}>
          Latest Achievements
        </Typography>
        <Typography variant="body2" color="text.secondary">
          - Completed an online course on React.js. <br />
          - Ran a marathon last month! <br />- Learned how to cook a new dish.
        </Typography>
        <Typography variant="h6" component="div" sx={{ mt: 2 }}>
          Upcoming Plans
        </Typography>
        <Typography variant="body2" color="text.secondary">
          - Planning a trip to the mountains next month. <br />- Starting a new
          project focused on AI.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Read More
        </Button>
        <Button size="small" color="secondary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
};

export default LifeUpdate;
