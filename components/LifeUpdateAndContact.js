import React from "react";
import {
  Grid,
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  CardActions,
  TextField,
} from "@mui/material";
import Quotes from "./Quotes";

// LifeUpdate Component
const LifeUpdate = () => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "100%", // Ensure it fits within its container
        height: "100%", // Allow height to be controlled by container
        boxShadow: 3,
        maxHeight: "600px", // Set a fixed maximum height
        overflow: "auto", // Add scroll if content exceeds height
      }}
    >
      <CardMedia
        component="img"
        height="100%"
        image="./pom.jpg" // Replace with your image URL
        alt="Life Update"
        style={{ height: "40%" }}
      />
      <CardContent sx={{ flex: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          What's new?
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          September 2024
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Recent Computer Science graduate. Currently looking for Software
          Engineering role.
        </Typography>
        <Typography variant="h6" component="div" sx={{ mt: 2 }}>
          What I am working on?
        </Typography>
        <Typography variant="body2" color="text.secondary">
          - Developing an online portfolio for a professional dancer <br />-
          Preparing for AWS Cloud Practioner certification exam
        </Typography>
        <Typography variant="h6" component="div" sx={{ mt: 2 }}>
          What I am doing beside work?
        </Typography>
        <Typography variant="body2" color="text.secondary">
          - Running, Badminton, Reading, Chess, Photography
          <br /> - Currently reading: Vegetarian by Han Kang
          <br /> Down below you can find the picture of the month taken by me!
        </Typography>
      </CardContent>
    </Card>
  );
};

// Contact Component
const Contact = () => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "100%", // Ensure it fits within its container
        height: "100%", // Allow height to be controlled by container
        boxShadow: 3,
        maxHeight: "600px", // Set a fixed maximum height
        overflow: "auto", // Add scroll if content exceeds height
        padding: 2,
      }}
    >
      <CardContent>
        <Typography variant="h4" component="h1" gutterBottom>
          Reach out to me...
        </Typography>
        <form
          action="https://formsubmit.co/rohailramesh@hotmail.com"
          method="POST"
          target="_blank"
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <TextField
            label="Full Name"
            name="name"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            label="Email Address"
            name="email"
            type="email"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            label="Your Message"
            name="message"
            multiline
            rows={6}
            variant="outlined"
            fullWidth
            required
          />
          <Box textAlign="center" mt={2}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              sx={{
                backgroundColor: "#000", // Set the background color to black
                color: "#fff", // Set the text color to white
                "&:hover": {
                  backgroundColor: "#333", // Optional: Darken on hover
                },
              }}
            >
              Submit Form
            </Button>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
};

// Footer Component
const LifeUpdateAndContact = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          {/* Life Update Section */}
          <Grid item xs={12} sm={6}>
            <LifeUpdate />
          </Grid>

          {/* Contact Form Section */}
          <Grid item xs={12} sm={6}>
            <Contact />
          </Grid>
        </Grid>
      </Container>
      {/* Full-width Image */}
      <Box
        sx={{
          width: "100%",
          height: "100%", // Adjust height to 30% of the viewport height
          mt: 4,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <img
          src="./pom.jpg" // Replace with your image URL
          alt="Full-width"
          style={{ width: "50%", height: "50%", objectFit: "cover" }}
        />
      </Box>
      <Quotes />
    </>
  );
};

export default LifeUpdateAndContact;
