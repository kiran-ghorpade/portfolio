/* eslint-disable react/prop-types */
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <Card elevation={1} sx={{width:'15rem'}}>
      <CardMedia
        component="img"
        height="150"
        image={project.image}
        alt={project.title}
      />
      <CardContent>
        <Typography variant="h6">{project.title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {project.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          LinkComponent={Link}
          to={project.link}
        >
          View Project
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
