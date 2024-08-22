"use client";

import { motion } from "framer-motion";
import styles from "./HeroAnimation.module.css";

export default function HeroAnimation() {
  return (
    <div className={styles.container}>
      {/* Rohail - Top */}
      <motion.div
        className={styles.name}
        initial={{ y: "-100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, delay: 0.5 }}
      >
        ROHAIL
      </motion.div>

      {/* Software Engineer - Middle */}
      <motion.div
        className={styles.title}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, delay: 1.5 }}
      >
        SOFTWARE ENGINEER
      </motion.div>

      {/* Ramesh - Bottom */}
      <motion.div
        className={styles.name}
        initial={{ y: "100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, delay: 0.5 }}
      >
        RAMESH
      </motion.div>
    </div>
  );
}
