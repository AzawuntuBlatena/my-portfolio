import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/youtubeHomePage.png";
import rmtdevImg from "@/public/auth_app.png";
import wordanalyticsImg from "@/public/budget-app.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full Stack Developer Intern",
    location: "Addis Ababa, I Tech Company",
    description:
      "I contributed to web app development using React and Node.js, integrating RESTful APIs and collaborating on code reviews. I also gained experience with Git version control.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "ICT Intern",
    location: "Woldia, Woldia University",
    description:
      "During my internship at Woldia University's ICT Directorate, I gained hands-on experience in maintaining electronic devices and installing networks. I was able to successfully troubleshoot hardware and software issues, as well as contribute to the repair and utilization of damaged devices.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  // {
  //   title: "Full-Stack Developer",
  //   location: "Houston, TX",
  //   description:
  //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
  //   icon: React.createElement(FaReact),
  //   date: "2021 - present",
  // },
] as const;

export const projectsData = [
  {
    title: "Home Page Clone",
    description:
      "I built a YouTube home page clone using Tailwind CSS, React, and TypeScript. This project allowed me to showcase my skills in modern web technologies while creating a complex UI that mimics the popular video platform. By leveraging the benefits of these tools, I delivered a responsive and user-friendly experience.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: corpcommentImg,
  },
  {
    title: "MERN Auth",
    description:
      "I built a MERN stack web app with authentication features like sign-up, login, and logout. The front-end uses React and React Router, while the back-end is built with Node.js, Express, and MongoDB, utilizing JWT for access control.",
    tags: ["React", "MongoDB", "Express",  "Node.js",  "Tailwind",],
    imageUrl: rmtdevImg,
  },
  {
    title: "Budget App",
    description:
      "I create a CRUD application to build a simple budget app using React. This project covers various intermediate and beginner-level React concepts, which come together to create a complex and practical application.",
    tags: ["React", "MongoDB"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "Prisma",
  "MongoDB",
  "Redux",
  // "GraphQL",
  // "Apollo",
  "Firebase",
  "Express",
  // "PostgreSQL",
  "Python",
  // "Django",
  "Framer Motion",
] as const;
