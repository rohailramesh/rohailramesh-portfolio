"use client";
import * as React from "react";
import { Box, Typography, Button } from "@mui/material";
import styles from "./ExperienceTimeline.module.css";
import { motion, useAnimation } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ExperienceTimeline() {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100px",
        }}
      >
        <Typography component="time" className={styles.section_heading}>
          EXPERIENCE
        </Typography>
      </div>

      <div className={styles.container}>
        <Box
          component="ol"
          className="relative border-s border-gray-200 dark:border-gray-700 mt-5 ml-5"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            variants={fadeInUp}
          >
            <Box component="li" className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-black dark:ring-gray-900 dark:bg-black-900">
                <svg
                  className="w-2.5 h-2.5 text-black-800 dark:text-black-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>

              <Typography
                component="time"
                className="block mb-2 text-sm font-bold leading-none text-black-400 dark:text-black-500"
              >
                Web & Applications Developer
              </Typography>
              <Typography
                component="time"
                className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
              >
                Mary's Meals (International) - 03/2025 - Present
              </Typography>
              <Box className="mb-4">
                <Typography className="text-base font-normal text-black-500 dark:text-black-400">
                  - Develop and maintain digital platforms using Nuxt.js and
                  Laravel to support Mary's Meals' mission of providing daily
                  meals to children in education.​
                </Typography>
                <Typography className="text-base font-normal text-black-500 dark:text-black-400">
                  - Integrate Stripe for secure donation processing with
                  Salesforce CRM and manage AWS infrastructure to ensure
                  scalable and reliable hosting of web applications and other
                  services.
                </Typography>
              </Box>
            </Box>
            <Box component="li" className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-black dark:ring-gray-900 dark:bg-black-900">
                <svg
                  className="w-2.5 h-2.5 text-black-800 dark:text-black-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>

              <Typography
                component="time"
                className="block mb-2 text-sm font-bold leading-none text-black-400 dark:text-black-500"
              >
                Computer Science Teaching Assistant
              </Typography>
              <Typography
                component="time"
                className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
              >
                Queen Mary University of London - 01/2023 - 03/2025
              </Typography>
              <Box className="mb-4">
                <Typography className="text-base font-normal text-black-500 dark:text-black-400">
                  - Mentored 7 teams through12-week SDLCproject, developing a
                  well-being applicationfor a consultancy firm (FDM Group)
                  achieving 95% project completion rate.
                </Typography>
                <Typography className="text-base font-normal text-black-500 dark:text-black-400">
                  - Led lab sessions for 200+ students across 5 core modules,
                  improving average assignment scores from 65% to 78%.
                </Typography>
              </Box>
            </Box>
            <Box component="li" className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-black dark:ring-gray-900 dark:bg-black-900">
                <svg
                  className="w-2.5 h-2.5 text-black-800 dark:text-black-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>

              <Typography
                component="time"
                className="block mb-2 text-sm font-bold leading-none text-black-400 dark:text-black-500"
              >
                Web Developer
              </Typography>
              <Typography
                component="time"
                className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
              >
                Freelance - 07/2024 - 12/2024
              </Typography>
              <Box className="mb-4">
                <Typography className="text-base font-normal text-black-500 dark:text-black-400">
                  - Developed scalable web applicationsusing MERN stack,
                  including a Next.js portfolio for a professional artist with
                  CMS-based event management, and Stripe integration for instant
                  booking, increasing event booking efficiency by 20%.
                </Typography>
                <Typography className="text-base font-normal text-black-500 dark:text-black-400">
                  - Leveraged modern technologies such as Socket.io, ShadCN UI,
                  Clerk, Cloudinary, MongoDB, TypeScript, and Zustand to enhance
                  functionality, scalability, and user experience.
                </Typography>
              </Box>
            </Box>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            variants={fadeInUp}
          >
            <Box component="li" className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-black dark:ring-gray-900 dark:bg-black-900">
                <svg
                  className="w-2.5 h-2.5 text-black-800 dark:text-black-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>

              <Typography
                component="time"
                className="block mb-2 text-sm font-bold leading-none text-black-400 dark:text-black-500"
              >
                Maths Tutor
              </Typography>
              <Typography
                component="time"
                className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
              >
                MyTutor - 02/2022 - 01/2025
              </Typography>
              <Box className="mb-4">
                <Typography className="text-base font-normal text-black-500 dark:text-black-400">
                  - Facilitated diverse data driven and tailored teaching
                  strategies for over 200 one-on-one and group tutoring
                  sessions.
                </Typography>
                <Typography className="text-base font-normal text-black-500 dark:text-black-400">
                  - Provided detailed and organised explanations, ensuring
                  clarity in remote teaching environment for over 10,000 minutes
                </Typography>
              </Box>
            </Box>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            variants={fadeInUp}
          >
            <Box component="li" className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-black dark:ring-gray-900 dark:bg-black-900">
                <svg
                  className="w-2.5 h-2.5 text-black-800 dark:text-black-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>

              <Typography
                component="time"
                className="block mb-2 text-sm font-bold leading-none text-black-400 dark:text-black-500"
              >
                Start Your Journey 2023 Technology & Data Intern
              </Typography>
              <Typography
                component="time"
                className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
              >
                Lloyds Banking Group - 08/2023
              </Typography>
              <Box className="mb-4">
                <Typography className="text-base font-normal text-black-500 dark:text-black-400">
                  - Analysed extensive fraud detection dataset, contributing to
                  7% increase in detection accuracy, aligning with industry
                  improvements from 85% to 92% in a bank simulation exercise.
                </Typography>
                <Typography className="text-base font-normal text-black-500 dark:text-black-400">
                  - Collaborated in a 4-day virtual hackathon, developing
                  innovative tech solutions and improving problem solving
                  skills.
                </Typography>
              </Box>
            </Box>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            variants={fadeInUp}
          >
            <Box component="li" className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-black dark:ring-gray-900 dark:bg-black-900">
                <svg
                  className="w-2.5 h-2.5 text-black-800 dark:text-black-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>

              <Typography
                component="time"
                className="block mb-2 text-sm leading-none text-black-400 dark:text-black-500 font-bold"
              >
                I Accelerator Technology & Engineering Intern
              </Typography>
              <Typography
                component="time"
                className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
              >
                Rolls Royce - 07/2022
              </Typography>
              <Box className="mb-4">
                <Typography className="text-base font-normal text-black-500 dark:text-black">
                  - Designed and implemented a remote maintenance solution for
                  urban mobility aircraft reducing average maintenance time by
                  25% per cycle.
                </Typography>
                <Typography className="text-base font-normal text-black-500 dark:text-black-400">
                  - Presented a technical innovation proposal to senior engineer
                  panel, achieving runner-up position among 10 competitive
                  projects.
                </Typography>
              </Box>
            </Box>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            variants={fadeInUp}
          >
            <Box component="li" className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-black dark:ring-gray-900 dark:bg-black-900">
                <svg
                  className="w-2.5 h-2.5 text-black-800 dark:text-black-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>

              <Typography
                component="time"
                className="block mb-2 text-sm font-bold leading-none text-black-500 dark:text-black"
              >
                Technology Stream Intern
              </Typography>
              <Typography
                component="time"
                className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray"
              >
                Bright Network - 06/2022
              </Typography>
              <Box className="mb-4">
                <Typography className="text-base font-normal text-black-500 dark:text-black">
                  - Optimised routing and scheduling algorithms using
                  breadth-first and depth-first search techniques, leading to a
                  10% improvement in delivery efficiency for simulated logistics
                  scenarios.
                </Typography>
                <Typography className="text-base font-normal text-black-500 dark:text-black">
                  - Completed a work sample project, demonstrating thorough
                  technical skills and problem-solving abilities.
                </Typography>
              </Box>
            </Box>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            variants={fadeInUp}
          >
            <Box component="li" className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-black dark:ring-gray-900 dark:bg-black-900">
                <svg
                  className="w-2.5 h-2.5 text-black-800 dark:text-black-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>

              <Typography
                component="time"
                className="block mb-2 text-sm font-bold leading-none  text-gray"
              >
                IT Floorwalker
              </Typography>
              <Typography
                component="time"
                className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-bgraylack"
              >
                Ideal Health & NHS Foundation Trust - 04/2022 - 05/2022
              </Typography>
              <Box className="mb-4">
                <Typography className="text-base font-normal text-gray-500 dark:text-black">
                  - Trained 100+ healthcare staff on EPR system, reducing
                  implementation time from 6 to 4.5 weeks.
                </Typography>
                <Typography className="text-base font-normal text-black-500 dark:text-black">
                  - Resolved 20+ software bugs during EPR system launch,
                  improving user satisfaction from 70% to 92%.
                </Typography>
              </Box>
            </Box>
          </motion.div>
        </Box>
      </div>
    </>
  );
}
