import { Container } from "@mui/material";
import Navbar from "../components/common/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/pages/home/Footer";

function Layout() {
  return (
    <Container sx={{mt:5}}>
      <Navbar />
      <Outlet />
      <Footer />
    </Container>
  );
}

export default Layout;
