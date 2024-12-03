import { Box, Container } from "@mui/material";
import Navbar from "../components/common/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/common/Footer";

function Layout() {
  return (
    <Container sx={{ mt: 5 }}>
      <Navbar />
      <Box my={{md:8, xs:5}}>
        <Outlet />
      </Box>
      <Footer />
    </Container>
  );
}

export default Layout;