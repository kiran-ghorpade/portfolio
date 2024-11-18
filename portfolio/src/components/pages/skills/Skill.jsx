/* eslint-disable react/prop-types */
import { Circle } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { InformationContext } from "../../../services/context/InformationContextProvider";
// import ProjectCard from "../common/ProjectCard";

function SkillCard({ skill, direction }) {
  const { projects, certifications } = useContext(InformationContext);

  const filterProjects = projects?.filter((project) =>
    project?.technologies?.find((s) => s === skill?.name)
  );

  const filterCertifications = certifications?.filter((project) =>
    project?.technologies?.find((s) => s === skill?.name)
  );

  // Horizontal Card
  if (direction === "horizontal")
    return (
      <Card elevation={1}>
        <Stack padding={1}>
          <CardMedia
            component="img"
            height={100}
            image={skill?.image}
            alt={skill?.title}
          />
          <CardContent>
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
                  <Button key={index}>{project?.title}</Button>
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
          </CardContent>
        </Stack>
      </Card>
    );
}

function Skill({ skill, open, handleCardClick }) {
  return (
    <Dialog open={open} onClose={handleCardClick}>
      <SkillCard skill={skill} direction="horizontal" />
    </Dialog>
  );
}

export default Skill;
