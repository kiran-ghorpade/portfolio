/* eslint-disable react/prop-types */
import { GitHub } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
  Stack,
  IconButton,
  Box,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";

function ProjectCard({ project, direction }) {
  // Horizontal Card
  if (direction === "horizontal")
    return (
      <Card elevation={1} sx={{ display: "flex", flexWrap: "wrap" }}>
        <CardMedia
          component="img"
          sx={{ width: 240 }}
          image={project?.image}
          alt={project?.title}
        />
        <Stack>
          <CardContent>
            <Stack gap={2}>
              <Box>
                <Typography variant="h6">{project?.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {project?.description}
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle1">Technology Used :</Typography>
                {project?.technologies?.map((technology, index) => (
                  <Button key={index} variant="outlined" sx={{ m: 1 }}>
                    {technology}
                  </Button>
                ))}
              </Box>
            </Stack>
          </CardContent>
          <Divider />
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
              <Button
                size="small"
                color="primary"
              >
                More Info
              </Button>
          </CardActions>
        </Stack>
      </Card>
    );

  // Vertical Small Card
  return (
    <Card elevation={1} sx={{ width: "15rem" }}>
      <CardMedia
        component="img"
        height="150"
        image={project?.image}
        alt={project?.title}
      />
      <CardContent>
        <Typography variant="h6">{project?.title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {project?.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          LinkComponent={Link}
          to={project?.link}
        >
          View Project
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
