"use client";
import React from "react";
import {
  Box,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const Footer = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.background.default,
        py: 4,
        borderTop: "1px solid",
        borderColor: theme.palette.divider,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign={isSmallScreen ? "center" : "center"}
        >
          © {new Date().getFullYear()} Rohail Ramesh. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
