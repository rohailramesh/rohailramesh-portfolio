"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
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
        <Typography gutterBottom variant="h5" component="div">
          PROJECTS
        </Typography>
        <div
          className={
            showAll ? styles.cards_wrapper : styles.single_card_wrapper
          }
        >
          <AnimatePresence>
            {showAll
              ? projects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
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
                        <Typography variant="body2" color="text.secondary">
                          {project.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))
              : projects.map(
                  (project) =>
                    activeCard === project.id && (
                      <motion.div
                        key={project.id}
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
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
                          </CardContent>
                          <CardActions>
                            <Button
                              size="small"
                              color="primary"
                              onClick={handleBackClick}
                            >
                              Back
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
