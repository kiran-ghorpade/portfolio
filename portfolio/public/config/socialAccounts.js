// My Social Accounts
// Update new Social Account Here

// import githubIcon from "../../../assets/icons/social/github.svg";
import githubIcon from "../../public/assets/icons/social/github.svg";
import linkedinIcon from "../../public/assets/icons/social/linkedin.svg";
import leetcodeIcon from "../../public/assets/icons/social/leetcode.svg";

const socialAccounts = [
  {
    name: "GitHub",
    type: "Social Platform",
    description:
      "Active GitHub user with multiple open-source contributions and repositories.",
    // icon: "../../assets/icons/social/github.svg",
    icon: githubIcon,
    link: "https://www.github.com/kiran-ghorpade",
  },
  {
    name: "LinkedIn",
    type: "Social Platform",
    description:
      "LinkedIn profile showcasing professional experience, skills, and recommendations.",
    icon: linkedinIcon,
    link: "https://linkedin.com/in/kiran-ghorpade",
  },
  {
    name: "Leetcode",
    type: "Coding Platform",
    description:
      "Active Stack Overflow user with a strong reputation for answering technical questions.",
    icon: leetcodeIcon,
    link: "https://leetcode.com/u/kiran-ghorpade/",
  },
];

export default socialAccounts;
