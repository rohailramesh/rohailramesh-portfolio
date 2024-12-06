"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
  Chip,
  Box,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Projects.module.css";
import Quotes from "./Quotes";
import projects from "../data/projects.json";

const Projects = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [showAll, setShowAll] = useState(true);

  const handleCardClick = (id) => {
    setActiveCard(id);
    setShowAll(false);
  };

  const handleBackClick = () => {
    setActiveCard(null);
    setShowAll(true);
  };

  return (
    <>
      <Quotes />
      <div className={styles.container}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100px",
          }}
        >
          <Typography component="time" className={styles.section_heading}>
            PROJECTS
          </Typography>
        </div>

        <div
          className={
            showAll ? styles.cards_wrapper : styles.single_card_wrapper
          }
        >
          <AnimatePresence initial={false} mode="wait">
            {showAll
              ? projects.map((project) => (
                  <motion.div
                    key={project.id}
                    layoutId={`project-${project.id}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className={styles.card}
                  >
                    <Card
                      onClick={() => handleCardClick(project.id)}
                      className={styles.cardContent}
                    >
                      <CardMedia
                        component="img"
                        height="140"
                        image={project.image}
                        alt={project.title}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {project.title}
                        </Typography>
                        {/* <Typography variant="body2" color="text.secondary">
                          {project.description}
                        </Typography> */}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))
              : projects.map(
                  (project) =>
                    activeCard === project.id && (
                      <motion.div
                        key={project.id}
                        layoutId={`project-${project.id}`}
                        initial={{ opacity: 0, scale: 1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className={styles.card}
                      >
                        <Card className={styles.cardContent}>
                          <CardMedia
                            component="img"
                            height="300"
                            image={project.image}
                            alt={project.title}
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              {project.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: project.details,
                                }}
                              />
                            </Typography>
                            <Box mt={2}>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                Tech Stack:
                              </Typography>
                              <Box display="flex" flexWrap="wrap" gap={1}>
                                {project.techStack.map((tech, index) => (
                                  <Chip
                                    key={index}
                                    label={tech}
                                    color="primary"
                                    sx={{
                                      backgroundColor: "#000",
                                      color: "#fff",
                                      "&:hover": {
                                        backgroundColor: "#333",
                                      },
                                    }}
                                  />
                                ))}
                              </Box>
                            </Box>
                          </CardContent>
                          <CardActions sx={{ marginLeft: 1 }}>
                            <Button
                              color="primary"
                              onClick={handleBackClick}
                              variant="contained"
                              sx={{
                                backgroundColor: "#000",
                                color: "#fff",
                                "&:hover": {
                                  backgroundColor: "#333",
                                },
                              }}
                            >
                              Back
                            </Button>
                            <Button
                              href={project.url}
                              target="_blank"
                              variant="contained"
                              sx={{
                                backgroundColor: "#000",
                                color: "#fff",
                                "&:hover": {
                                  backgroundColor: "#333",
                                },
                              }}
                            >
                              View Project
                            </Button>
                          </CardActions>
                        </Card>
                      </motion.div>
                    )
                )}
          </AnimatePresence>
        </div>
      </div>
      <Quotes />
    </>
  );
};

export default Projects;
