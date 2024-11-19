/* eslint-disable react/prop-types */
import { GitHub } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <Card elevation={1}>
      <Stack padding={1}>
        <CardMedia
          component="img"
          height={100}
          image={project?.image}
          alt={project?.title}
        />
        <CardContent>
          <Box>
            <Typography variant="h6">{project?.title}</Typography>
            <Typography variant="body2" color="textSecondary">
              {project?.description}
            </Typography>
          </Box>
          <Divider />
          <Box>
            <Typography variant="subtitle1">Technology Used :</Typography>
            {project?.technologies?.map((technology, index) => (
              <Button key={index} variant="outlined" sx={{ m: 1 }}>
                {technology}
              </Button>
            ))}
          </Box>
          <Divider />
        </CardContent>
        <CardActions>
          <IconButton LinkComponent={Link} to={project?.links?.github}>
            <GitHub />
          </IconButton>

          <Button
            size="small"
            color="primary"
            LinkComponent={Link}
            to={project?.links?.docs}
          >
            Docs
          </Button>

          {project?.link?.demo && (
            <Button
              size="small"
              color="primary"
              LinkComponent={Link}
              to={project?.links?.demo}
            >
              Demo
            </Button>
          )}
        </CardActions>
      </Stack>
    </Card>
  );
}

function Project({ project, open, handleCardClick }) {
  return (
    <Dialog open={open} onClose={handleCardClick}>
      <ProjectCard project={project} />
    </Dialog>
  );
}

export default Project;
