// My Skills
// Update new Skills Here

import javascriptIcon from "../../public/assets/icons/tech/javascript.svg";
import reactIcon from "../../public/assets/icons/tech/react.svg";
import nodejsIcon from "../../public/assets/icons/tech/nodejs.svg";
import pythonIcon from "../../public/assets/icons/tech/python.svg";
import cppIcon from "../../public/assets/icons/tech/c++.svg";
import bootstrapIcon from "../../public/assets/icons/tech/bootstrap5.svg";
import mongodbIcon from "../../public/assets/icons/tech/mongodb.svg";
import gitIcon from "../../public/assets/icons/tech/git.svg";
import cssIcon from "../../public/assets/icons/tech/css.svg";
import sqlIcon from "../../public/assets/icons/tech/sql.svg";

const skillSet = [
  {
    name: "JavaScript",
    level: "Intermediate",
    type: "Programming Language",
    description:
      "Proficient in JavaScript for both front-end and back-end development using modern frameworks and libraries like React, Node.js, and Express.",
    icon: javascriptIcon || "https://via.placeholder.com/100",
  },
  {
    name: "C++",
    level: "Intermediate",
    type: "Programming Language",
    description:
      "Proficient in JavaScript for both front-end and back-end development using modern frameworks and libraries like React, Node.js, and Express.",
    icon: cppIcon || "https://via.placeholder.com/100",
  },
  {
    name: "React",
    level: "Intermediate",
    type: "Frontend Framework",
    description:
      "Extensive experience building user interfaces with React and React Hooks, focusing on responsive, performant, and reusable components.",
    icon: reactIcon || "https://via.placeholder.com/100",
  },
  {
    name: "Bootstrap",
    level: "Intermediate",
    type: "Frontend Framework",
    description:
      "Extensive experience building user interfaces with React and React Hooks, focusing on responsive, performant, and reusable components.",
    icon: bootstrapIcon || "https://via.placeholder.com/100",
  },
  {
    name: "Node.js",
    level: "Beginner",
    type: "Backend Framework",
    description:
      "Experience using Node.js for building scalable server-side applications and APIs with Express and MongoDB.",
    icon: nodejsIcon || "https://via.placeholder.com/100",
  },
  {
    name: "Python",
    level: "Beginner",
    type: "Programming Language",
    description:
      "Skilled in Python for web development, automation scripts, and data science applications with libraries like Flask and Pandas.",
    icon: pythonIcon || "https://via.placeholder.com/100",
  },
  {
    name: "MongoDB",
    level: "Beginner",
    type: "Database",
    description:
      "Hands-on experience with MongoDB for building NoSQL databases with efficient data modeling and aggregation.",
    icon: mongodbIcon || "https://via.placeholder.com/100",
  },
  {
    name: "Git",
    level: "Intermediate",
    type: "Version Control",
    description:
      "Strong knowledge of Git for version control, including branching, merging, and collaborative development workflows.",
    icon: gitIcon || "https://via.placeholder.com/100",
  },
  {
    name: "CSS",
    level: "Intermediate",
    type: "Styling",
    description:
      "Experienced in writing clean and efficient CSS for modern web layouts, including Flexbox, Grid, and CSS-in-JS solutions.",
    icon: cssIcon || "https://via.placeholder.com/100",
  },
  {
    name: "SQL",
    level: "Intermediate",
    type: "Database",
    description:
      "Experience writing and optimizing SQL queries for relational databases such as MySQL and PostgreSQL.",
    icon: sqlIcon || "https://via.placeholder.com/100",
  },
];

export default skillSet;
