import { Container, Stack } from "@mui/material";
import Navbar from "../common/Navbar";
import About from "./home/About";
import Header from "./home/Header";
import Skills from "./home/Skills";
import Contact from "./home/Contact";
import PortfolioStats from "./PortfolioStats";
import Projects from "./home/Projects";
import Footer from "./home/Footer";

function HomePage() {
  return (
    <Container>
      <Navbar />
      <Header />
      <Stack gap={4}>
        <About />
        <Projects />
        <Skills />
        <Contact />
        <PortfolioStats />
        <Footer />
      </Stack>
    </Container>
  );
}

export default HomePage;
