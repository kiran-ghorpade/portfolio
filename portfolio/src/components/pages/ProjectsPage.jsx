import { Container, Grid2, Stack } from "@mui/material";
import SectionHead from "../common/SectionHead";
import ProjectCard from "../common/ProjectCard";
import { useContext } from "react";
import { InformationContext } from "../../services/context/InformationContextProvider";

function ProjectsPage() {
  const { projects } = useContext(InformationContext);

  return (
    <Container>
      <Stack alignItems="center" spacing={4}>
        <SectionHead>Projects</SectionHead>

        <Grid2 container spacing={4} justifyContent="center">
          {projects?.map((project, index) => (
            <Grid2 xs={6} sm={8} md={3} key={index}>
              <ProjectCard direction='horizontal' project={project} />
            </Grid2>
          ))}
        </Grid2>
      </Stack>
    </Container>
  );
}

export default ProjectsPage;
