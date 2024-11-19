import { Container, Stack } from "@mui/material";
import About from "./home/About";
import Header from "./home/Header";
import Skills from "./home/Skills";
import Contact from "./home/Contact";
import Projects from "./home/Projects";

function HomePage() {
  return (
    <Container>
      <Header />
      <Stack gap={4}>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </Stack>
    </Container>
  );
}

export default HomePage;
