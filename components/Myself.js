import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, IconButton, Link } from "@mui/material";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";
import ComputerIcon from "@mui/icons-material/Computer";
import StorageIcon from "@mui/icons-material/Storage";
import styles from "./MySelf.module.css";
import Quotes from "./Quotes";

function Myself() {
  return (
    <>
      <Quotes />
      <div className={styles.container}>
        {/* Card Section */}

        <div className={styles.card}>
          <Card
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" }, // Responsive layout
              maxWidth: 1000,
              boxShadow: 3,
              borderRadius: 2,
              overflow: "hidden",
              backgroundColor: "#ffffff",
              marginTop: 10,
            }}
          >
            {/* Card Media */}
            <CardMedia
              component="img"
              sx={{
                width: { xs: "100%", md: 350 },
                height: { xs: 250, md: "auto" },
                objectFit: "cover",
              }}
              image="/profile-pic.jpg"
              alt="Rohail Ramesh"
            />

            {/* Card Content */}
            <Box
              sx={{ display: "flex", flexDirection: "column", flex: 1, p: 3 }}
            >
              <CardContent>
                <Typography
                  variant="h4"
                  component="div"
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "Roboto, sans-serif",
                    marginBottom: 1,
                  }}
                >
                  Rohail Ramesh
                </Typography>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{ marginBottom: 2, fontFamily: "Roboto, sans-serif" }}
                >
                  Full Stack Software Developer
                </Typography>
                <Typography
                  variant="body1"
                  color="text.primary"
                  sx={{ marginBottom: 2, fontFamily: "Roboto, sans-serif" }}
                >
                  Passionate Full Stack Developer with extensive experience in
                  building web and mobile applications using JavaScript,
                  React.js, Next.js, React Native, and various other
                  technologies and frameworks.
                </Typography>
                {/* Skills with Icons */}
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 2,
                    marginBottom: 2,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CodeIcon color="action" sx={{ marginRight: 1 }} />
                    <Typography variant="body2" color="text.secondary">
                      JavaScript, Python, Java
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <StorageIcon color="action" sx={{ marginRight: 1 }} />
                    <Typography variant="body2" color="text.secondary">
                      SQL, NoSQL, PostgreSQL
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <ComputerIcon color="action" sx={{ marginRight: 1 }} />
                    <Typography variant="body2" color="text.secondary">
                      Windows, Linux, MacOS
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <LocalLibraryIcon color="action" sx={{ marginRight: 1 }} />
                    <Typography variant="body2" color="text.secondary">
                      React.js, React Native, Next.js, Django
                    </Typography>
                  </Box>
                </Box>
              </CardContent>

              {/* Card Actions */}
              <CardActions sx={{ paddingLeft: 2, paddingBottom: 2 }}>
                <Button
                  size="medium"
                  variant="contained"
                  sx={{
                    backgroundColor: "#000", // Set the background color to black
                    color: "#fff", // Set the text color to white
                    "&:hover": {
                      backgroundColor: "#333", // Optional: Darken on hover
                    },
                  }}
                  href="/cv.pdf"
                  target="_blank"
                >
                  View CV
                </Button>
                {/* Social Media Icons */}
                <Box sx={{ marginLeft: "auto", display: "flex", gap: 1 }}>
                  <IconButton
                    component={Link}
                    href="https://www.linkedin.com/in/rohail-ramesh-a18b001b4/"
                    target="_blank"
                    rel="noopener"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon color="black" />
                  </IconButton>
                  <IconButton
                    component={Link}
                    href="https://github.com/rohailramesh"
                    target="_blank"
                    rel="noopener"
                    aria-label="GitHub"
                  >
                    <GitHubIcon />
                  </IconButton>
                  <IconButton
                    component={Link}
                    href="mailto:rohailramesh@hotmail.com"
                    aria-label="Email"
                  >
                    <EmailIcon color="action" />
                  </IconButton>
                </Box>
              </CardActions>
            </Box>
          </Card>
        </div>
      </div>
      <Quotes />
    </>
  );
}

export default Myself;
