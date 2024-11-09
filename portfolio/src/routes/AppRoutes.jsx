import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "../components/pages/HomePage";

function AppRoutes() {
  return (
    <Router future={{ v7_startTransition: true }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<HomePage />} />
        <Route path="/projects" element={<HomePage />} />
        <Route path="/skills" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
