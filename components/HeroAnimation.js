"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./HeroAnimation.module.css";

export default function HeroAnimation() {
  return (
    <>
      <div className={styles.container}>
        <motion.div
          className={styles.name}
          initial={{ x: "-100vh", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, delay: 0.5 }}
        >
          ROHAIL
        </motion.div>

        <Image
          src="/logo.png"
          alt="Rohail"
          width={100}
          height={100}
          className={styles.logo}
        />

        <motion.div
          className={styles.name}
          initial={{ x: "100vh", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, delay: 0.5 }}
        >
          RAMESH
        </motion.div>
      </div>
    </>
  );
}
