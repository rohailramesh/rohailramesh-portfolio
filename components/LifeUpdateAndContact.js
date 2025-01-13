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
  TextField,
} from "@mui/material";
import Quotes from "./Quotes";
import Image from "next/image";
import styles from "./Projects.module.css";

// LifeUpdate Component
const LifeUpdate = () => {
  const today = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[today.getMonth()];
  const year = today.getFullYear();
  const currentDate = month + "-" + year;
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "100%",
        height: "100%",
        boxShadow: 3,
        maxHeight: "600px",
        overflow: "auto",
      }}
    >
      <CardMedia
        component="img"
        height="100%"
        image="./update-bg.jpg"
        alt="Life Update"
        style={{ height: "40%" }}
      />
      <CardContent sx={{ flex: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          What is new?
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          {currentDate}
        </Typography>

        <Typography variant="h6" component="div" sx={{ mt: 2 }}>
          What I am working on?
        </Typography>
        <Typography variant="body2" color="text.secondary">
          - Developing and maintaining an online portfolio for a professional
          dancer <br />- Exploring cloud solutions (AWS)
          <br /> - Learning Perl
        </Typography>
        <Typography variant="h6" component="div" sx={{ mt: 2 }}>
          What I am doing beside work?
        </Typography>
        <Typography variant="body2" color="text.secondary">
          - Running, Badminton, Reading, Chess, Photography
          <br /> - Currently reading: 1984 by George Orwell
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
        maxWidth: "100%",
        height: "100%",
        boxShadow: 3,
        maxHeight: "600px",
        overflow: "auto",
        padding: 2,
        backgroundImage: `url('/timeline-bg4.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        color: "#fff",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      />

      <CardContent sx={{ position: "relative", zIndex: 2 }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          className={styles.section_heading}
        >
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
            sx={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
          />
          <TextField
            label="Email Address"
            name="email"
            type="email"
            variant="outlined"
            fullWidth
            required
            sx={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
          />
          <TextField
            label="Your Message"
            name="message"
            multiline
            rows={6}
            variant="outlined"
            fullWidth
            required
            sx={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
          />
          <Box textAlign="center" mt={2}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              sx={{
                backgroundColor: "#000",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#333",
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
          <Grid item xs={12} sm={6}>
            <LifeUpdate />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Contact />
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          mt: 4,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Image
          src="/pom.jpg"
          alt="Picture of the month"
          width={500}
          height={500}
        />
      </Box>
      <Quotes />
    </>
  );
};

export default LifeUpdateAndContact;
