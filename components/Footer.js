// Footer.js
"use client";
import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
        {/* Bottom Copyright Section */}

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
