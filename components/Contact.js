import React from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";

const Contact = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "50%", // Allow height to be controlled by container
        maxWidth: "100%", // Ensure it fits within its container
        boxShadow: 3,
        padding: 2,
      }}
    >
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
    </Container>
  );
};

export default Contact;
