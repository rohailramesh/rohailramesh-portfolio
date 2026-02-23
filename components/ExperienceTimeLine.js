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
                Mary&apos;s Meals (International) - 03/2025 - Present
              </Typography>
              <Box className="mb-4">
                <Typography className="text-base font-normal text-black-500 dark:text-black-400">
                  - Building responsive, multi-language supporter journeys using
                  Vue.js and modern TypeScript, serving a global audience across
                  devices. Designing intuitive donation flows, story pages and
                  regional content, improving accessibility and engagement.
                </Typography>
                <Typography className="text-base font-normal text-black-500 dark:text-black-400">
                  - Integrating Stripe (payments), Algolia (search), Google
                  Analytics (behaviour insights) and OpenAI features to support
                  data-informed improvements that contribute to ongoing digital
                  transformation initiatives supporting over 3 million children
                  daily.
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
                  - Mentored 7 student teams through full 12-week SDLC cycles to
                  build well-being web and mobile applications for FDM Group,
                  guiding them on frontend design with React and React Native to
                  create responsive, user-centered interfaces resulting in a 95%
                  project completion rate and earning the Best Software
                  Engineering Award through strong agile practices and clean,
                  intuitive UI/UX focus.
                </Typography>
                <Typography className="text-base font-normal text-black-500 dark:text-black-400">
                  - Led hands-on lab sessions for 200+ students across 5 core
                  modules, breaking down complex programming and networking
                  concepts while demonstrating practical frontend development
                  techniques, delivering clear, engaging explanations that
                  achieved a 97% issue resolution rate and helped students
                  confidently build interactive, cross-platform apps.
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
                Freelance - 07/2024 - 02/2025
              </Typography>
              <Box className="mb-4">
                <Typography className="text-base font-normal text-black-500 dark:text-black-400">
                  - Developing, user-friendly web applications with a strong
                  frontend focus using modern tech stacks, including a custom
                  portfolio site for a professional artist featuring intuitive
                  event browsing, CMS-driven content management, and seamless
                  cross-device layouts to showcase work and engage visitors
                  effectively.
                </Typography>
                <Typography className="text-base font-normal text-black-500 dark:text-black-400">
                  - Designed and built responsive UI components with ShadCN and
                  TypeScript, creating a smoother, more accessible user
                  experience. Integrated Stripe for seamless bookings and
                  Cloudinary for media handling, leading to a 20% increase in
                  event bookings.
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
