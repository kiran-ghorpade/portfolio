import { Route, HashRouter as Router, Routes } from "react-router-dom";
import NotFoundPage from "../components/pages/NotFoundPage";
import Layout from "./Layout";
import { routes } from "./Routes";

function AppRoutes() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route element={<Layout />}>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
