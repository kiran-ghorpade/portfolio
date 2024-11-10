import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "../components/pages/HomePage";
import AboutPage from "../components/pages/AboutPage";
import ProjectsPage from "../components/pages/ProjectsPage";
import ContactPage from "../components/pages/ContactPage";
import Layout from "./Layout";
import NotFoundPage from "../components/pages/NotFoundPage";

function AppRoutes() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
