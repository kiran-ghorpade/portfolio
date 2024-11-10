import { Button, Grid2, Stack } from "@mui/material";
import ProjectCard from "../../common/ProjectCard";
import Section from "../../common/Section";
import SectionHead from "../../common/SectionHead";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { InformationContext } from "../../../services/context/InformationContextProvider";

function Projects() {
  const { projects } = useContext(InformationContext);

  return (
    <Section>
      <Stack alignItems="center" spacing={4}>
        <SectionHead>Projects</SectionHead>

        <Grid2 container spacing={4} justifyContent="center">
          {projects?.slice(0, 4)?.map((project, index) => (
            <Grid2 xs={6} sm={8} md={3} key={index}>
              <ProjectCard project={project} />
            </Grid2>
          ))}
        </Grid2>

        <Link to="/projects">
          <Button variant="contained">All Projects</Button>
        </Link>
      </Stack>
    </Section>
  );
}

export default Projects;
