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
        <div className={styles.card}>
          <Card
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" }, // Column on small screens, row on medium and above
              maxWidth: { xs: "100%", md: 1000 }, // Full width on small screens
              boxShadow: 3,
              borderRadius: 2,
              overflow: "hidden",
              backgroundColor: "#ffffff",
              marginTop: { xs: 2, md: 10 }, // Margin varies based on screen size
            }}
          >
            <CardMedia
              component="img"
              sx={{
                width: { xs: "100%", md: 350 },
                height: { xs: 200, md: "auto" },
                objectFit: "cover",
              }}
              image="/profile-pic.jpg"
              alt="Rohail Ramesh"
            />

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                p: { xs: 2, md: 3 },
              }} // Responsive padding
            >
              <CardContent>
                <Typography
                  variant="h4"
                  component="div"
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "Roboto, sans-serif",
                    marginBottom: 1,
                    fontSize: { xs: "1.5rem", md: "2rem" }, // Responsive font size
                  }}
                >
                  Rohail Ramesh
                </Typography>
                {/* <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{
                    marginBottom: 2,
                    fontFamily: "Roboto, sans-serif",
                    fontSize: { xs: "1rem", md: "1.25rem" }, // Responsive font size
                  }}
                >
                  Computer Scientist
                </Typography> */}
                <Typography
                  variant="body1"
                  color="text.primary"
                  sx={{
                    marginBottom: 2,
                    fontFamily: "Roboto, sans-serif",
                    fontSize: { xs: "0.875rem", md: "1rem" }, // Responsive font size
                  }}
                >
                  Computer Scientist with expertise in full-stack development
                  and scalable applications. Experienced in providing technical
                  support and solving real-world problems.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 2,
                    marginBottom: 2,
                  }}
                >
                  {/* <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CodeIcon color="action" sx={{ marginRight: 1 }} />
                    <Typography variant="body2" color="text.secondary">
                      JavaScript, Python
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <StorageIcon color="action" sx={{ marginRight: 1 }} />
                    <Typography variant="body2" color="text.secondary">
                      SQL, NoSQL
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
                  </Box> */}
                </Box>
              </CardContent>

              <CardActions sx={{ paddingLeft: 2, paddingBottom: 2 }}>
                <Button
                  size="medium"
                  variant="contained"
                  sx={{
                    backgroundColor: "#000",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#333",
                    },
                    fontSize: { xs: "0.75rem", md: "1rem" }, // Responsive button font size
                  }}
                  href="/cv.pdf"
                  target="_blank"
                >
                  View CV
                </Button>
                <Box sx={{ marginLeft: "auto", display: "flex", gap: 1 }}>
                  <IconButton
                    component={Link}
                    href="https://www.linkedin.com/in/rohail-ramesh-a18b001b4/"
                    target="_blank"
                    rel="noopener"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon color="action" />
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
