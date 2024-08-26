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
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-white-900">
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
                Queen Mary University of London - 01/2023 - Present
              </Typography>
              <Box className="mb-4">
                <Typography className="text-base font-normal text-black-500 dark:text-black-400">
                  - Provided comprehensive support to module organisers during
                  lab sessions, tutorials, and assessment marking.
                </Typography>
                <Typography className="text-base font-normal text-black-500 dark:text-black-400">
                  - Guided 7 teams through SDLC, developing a well-being app for
                  a tech consultancy firm for 12 weeks, resulting in a 95%
                  project completion rate.
                </Typography>
                <Typography className="text-base font-normal text-black-500 dark:text-black-400">
                  - Modules assisted: Professional Research Practice,
                  Fundamentals of Web Technology, Information System Analysis
                  (1st Year), Software Engineering, and Software Engineering
                  Project (2nd Year).
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
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-white-900">
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
                MyTutor - 02/2022 - Present
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
                <Typography className="text-base font-normal text-black-500 dark:text-black-400">
                  - Applied analytical and logical problem-solving skills to
                  enhance students’ understanding of mathematical concepts.
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
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-white-900">
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
                  - Led a data analysis project focused on fraud detection,
                  showcasing technical and problem-solving skills.
                </Typography>
                <Typography className="text-base font-normal text-black-500 dark:text-black-400">
                  - Developed and tested a notification system, integrating user
                  requirements and technical specifications
                </Typography>
                <Typography className="text-base font-normal text-grblackay-500 dark:text-black-400">
                  - Demonstrated strategic thinking in a bank simulation,
                  emphasising collaboration and technical competency.
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
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-white-900">
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
                  - Created a remote maintenance and charging solution for urban
                  mobility aircrafts, emphasising technical innovation.
                </Typography>
                <Typography className="text-base font-normal text-black-500 dark:text-black-400">
                  - Presented technical solutions to senior leaders, integrating
                  new technology insights.
                </Typography>
                <Typography className="text-base font-normal text-black-500 dark:text-black-400">
                  - Collaborated with 5 team members to research and design
                  software solutions.
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
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-white-900">
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
                className="block mb-2 text-sm font-bold leading-none text-white-500 dark:text-white"
              >
                Technology Stream Intern
              </Typography>
              <Typography
                component="time"
                className="block mb-2 text-sm font-normal leading-none text-white-500 dark:text-white"
              >
                Bright Network - 06/2022
              </Typography>
              <Box className="mb-4">
                <Typography className="text-base font-normal text-white-500 dark:text-white">
                  - Optimised routing and scheduling algorithms using
                  breadth-first and depth-first search techniques, leading to a
                  10% improvement in delivery efficiency for simulated logistics
                  scenarios.
                </Typography>
                <Typography className="text-base font-normal text-white-500 dark:text-white">
                  - Completed a work sample project, demonstrating thorough
                  technical skills and problem-solving abilities.
                </Typography>
                <Typography className="text-base font-normal text-white-500 dark:text-white">
                  - Researched and developed software solutions for delivery
                  optimization challenges presented by Amazon.
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
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-white-900">
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
                className="block mb-2 text-sm font-bold leading-none text-gray-400 text-white"
              >
                IT Floorwalker
              </Typography>
              <Typography
                component="time"
                className="block mb-2 text-sm font-normal leading-none text-white-500 dark:text-white"
              >
                Ideal Health & NHS Foundation Trust - 04/2022 - 05/2022
              </Typography>
              <Box className="mb-4">
                <Typography className="text-base font-normal text-gray-500 dark:text-white">
                  - Provided technical support for the Electronic Patient Record
                  (EPR) system implementation across 5 hospital departments,
                  ensuring seamless integration and achieving a 98% user
                  satisfaction rate.
                </Typography>
                <Typography className="text-base font-normal text-gray-500 dark:text-white">
                  - Monitored and resolved over 20 software bugs, significantly
                  improving system efficiency and reducing downtime by 10%
                  during the critical post-launch phase.
                </Typography>
                <Typography className="text-base font-normal text-white-500 dark:text-white">
                  - Delivered comprehensive user training to over 100 healthcare
                  professionals, creating detailed operational documentation
                  that facilitated a 20% faster adoption rate of the new EPR
                  system.
                </Typography>
              </Box>
            </Box>
          </motion.div>
        </Box>
      </div>
    </>
  );
}
