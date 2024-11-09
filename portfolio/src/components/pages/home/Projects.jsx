import { Button, Grid2, Stack } from "@mui/material";
import projects from "../../../../public/config/projects";
import ProjectCard from "../../common/ProjectCard";
import Section from "../../core/Section";
import SectionHead from "../../core/SectionHead";

function Projects() {
  return (
    <Section>
      <Stack alignItems="center" spacing={4}>
        <SectionHead>Projects</SectionHead>

        <Grid2 container spacing={4} justifyContent="center">
          {projects.slice(0, 4).map((project, index) => (
            <Grid2 item xs={12} sm={8} md={3} key={index}>
              <ProjectCard project={project} />
            </Grid2>
          ))}
        </Grid2>

        <Button variant="contained">All Projects</Button>
      </Stack>
    </Section>
  );
}

export default Projects;
