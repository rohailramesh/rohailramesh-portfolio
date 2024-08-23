import React from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";

const Contact = () => {
  return (
    <Container maxWidth="sm" style={{ marginTop: "2rem" }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Contact Us
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
          >
            Submit Form
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default Contact;
