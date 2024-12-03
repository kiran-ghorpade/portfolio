/* eslint-disable react/prop-types */
import { Circle } from "@mui/icons-material";
import {
  Button,
  CardMedia,
  DialogContent,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import { InformationContext } from "../../../services/context/InformationContextProvider";
import Dialog from "../../common/Dialog";
import Project from "../projects/ProjectDialog";
// import ProjectCard from "../common/ProjectCard";

function SkillCard({ skill, handleProjectClick }) {
  const { projects, certifications } = useContext(InformationContext);

  const filterProjects = projects?.filter((project) =>
    project?.technologies?.find((s) => s === skill?.name)
  );

  const filterCertifications = certifications?.filter((project) =>
    project?.technologies?.find((s) => s === skill?.name)
  );

  return (
    <Stack padding={1} alignItems="center">
      <CardMedia
        component="img"
        sx={{
          width: { md: 150 }, // Set width for different screen sizes
          objectFit: "cover",
        }}
        image={skill?.image}
        alt={skill?.title}
      />
      <DialogContent>
        <Typography variant="h6">{skill?.name}</Typography>
        <Typography variant="subtitle2">{skill?.description}</Typography>
        <Divider />
        <Typography variant="subtitle2">Level : {skill?.level}</Typography>
        <Divider />

        <Typography variant="subtitle1">I Know :</Typography>
        <List>
          {skill?.points?.map((value, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <Circle color="secondary" />
              </ListItemIcon>
              <ListItemText>{value}</ListItemText>
            </ListItem>
          ))}
        </List>
        {filterProjects?.length != 0 && (
          <>
            <Divider />
            <Typography variant="subtitle1">Projects :</Typography>
            {filterProjects?.map((project, index) => (
              <Button key={index} onClick={() => handleProjectClick(project)}>
                {project?.title}
              </Button>
            ))}
          </>
        )}

        {filterCertifications?.length != 0 && (
          <>
            <Divider />
            <Typography variant="subtitle1">Certifications :</Typography>
            {filterCertifications?.map((certification, index) => (
              <Button key={index}>{certification?.title}</Button>
            ))}
          </>
        )}
      </DialogContent>
    </Stack>
  );
}

function SkillDialog({ skill, open, handleCardClick }) {
  const [openProjectDialog, setOpenProjectDialog] = useState(false);
  const [project, setProject] = useState({});

  const handleProjectClick = (project) => {
    setOpenProjectDialog(!openProjectDialog);
    setProject(project);
  };

  return (
    <Dialog open={open} handleClose={handleCardClick} value={skill}>
      <SkillCard skill={skill} handleProjectClick={handleProjectClick} />
      <Project
        open={openProjectDialog}
        project={project}
        handleCardClick={handleProjectClick}
      />
    </Dialog>
  );
}

export default SkillDialog;
