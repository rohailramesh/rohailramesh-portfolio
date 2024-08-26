"use client";
import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import quotes from "../data/quotes.json";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import styles from "./Quotes.module.css";

export default function Quotes() {
  const [currentQuote, setCurrentQuote] = React.useState(null);

  React.useEffect(() => {
    const initialQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setCurrentQuote(initialQuote);
  }, []);

  const getRandomQuote = () => {
    const newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setCurrentQuote(newQuote);
  };

  if (!currentQuote) return null;

  return (
    <Box sx={{ marginTop: 4, textAlign: "center", padding: 2 }}>
      <div className={styles.quotes_container}>
        <Typography
          variant="h6"
          component="p"
          sx={{ fontStyle: "italic", fontFamily: "Roboto, sans-serif" }}
        >
          &quot;{currentQuote.en}&quot;
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{ fontWeight: "bold", fontFamily: "Roboto, sans-serif" }}
        >
          - {currentQuote.author}
        </Typography>

        <Button onClick={getRandomQuote}>
          <AutorenewIcon color="action" sx={{ marginRight: 1 }} />
        </Button>
      </div>
    </Box>
  );
}
