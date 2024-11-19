import AboutPage from "../components/pages/AboutPage";
import CertificationsPage from "../components/pages/CertificationsPage";
import ContactPage from "../components/pages/ContactPage";
import HomePage from "../components/pages/HomePage";
import PortfolioPage from "../components/pages/PortfolioPage";
import ProjectsPage from "../components/pages/ProjectsPage";
import SkillsPage from "../components/pages/SkillsPage";

// Routes
// order matters
export const routes = [
  // Navigations
  { title: "Home", type: "navgation", path: "/", component: <HomePage /> },
  {
    title: "About",
    type: "navgation",
    path: "/about",
    component: <AboutPage />,
  },
  {
    title: "Projects",
    type: "navgation",
    path: "/projects",
    component: <ProjectsPage />,
  },
  {
    title: "Skills",
    type: "navgation",
    path: "/skills",
    component: <SkillsPage />,
  },
  {
    title: "Certifications",
    type: "navgation",
    path: "/certifications",
    component: <CertificationsPage />,
  },
  {
    title: "Contact",
    type: "navgation",
    path: "/contact",
    component: <ContactPage />,
  },

  // Other Components
  {
    title: "Portfolio",
    type: "component",
    path: "/portfolio",
    component: <PortfolioPage />,
  },
];
