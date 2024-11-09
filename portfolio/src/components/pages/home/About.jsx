import { Button, Stack, Typography } from "@mui/material";
import Section from "../../core/Section";
import SectionHead from "../../core/SectionHead";

function About() {
  return (
    <Section>
      <Stack alignItems="center" spacing={2}>
        <SectionHead>About Me</SectionHead>

        <Typography variant="body2" maxWidth={700} textAlign="center">
          Hi! I&apos;m Kiran Krushna Ghorpade
          <br />
          I’m currently persuing my Master’s in Computer Applications at
          Savitribai Phule Pune University, where I’ve gained a strong
          foundation in software development, AI, and data analytics. I’m always
          looking for ways to apply my skills in innovative ways.
        </Typography>

        <Button variant="contained">View Resume</Button>
      </Stack>
    </Section>
  );
}

export default About;
