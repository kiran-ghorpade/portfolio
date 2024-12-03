import { Container, Grid2, Stack } from "@mui/material";
import SectionHead from "../common/SectionHead";
import ProjectCard from "./projects/ProjectCard";
import { useContext, useState } from "react";
import { InformationContext } from "../../services/context/InformationContextProvider";
import ProjectDialog from "./projects/ProjectDialog";

function ProjectsPage() {
  const { projects } = useContext(InformationContext);
  const [openProjectDialog, setOpenProjectDialog] = useState(false);
  const [project, setProject] = useState({});

  const handleCardClick = (project) => {
    setOpenProjectDialog(!openProjectDialog);
    setProject(project);
  };
  return (
    <Container>
      <Stack alignItems="center" spacing={4}>
        <SectionHead>Projects</SectionHead>

        <Grid2 container spacing={1}>
          {projects?.map((project, index) => (
            <Grid2 size={{ md: 6, xs: 12 }} key={index}>
              <ProjectCard
                direction="horizontal"
                project={project}
                handleCardClick={handleCardClick}
              />
            </Grid2>
          ))}
        </Grid2>

        <ProjectDialog
          open={openProjectDialog}
          project={project}
          handleCardClick={handleCardClick}
        />
      </Stack>
    </Container>
  );
}

export default ProjectsPage;
