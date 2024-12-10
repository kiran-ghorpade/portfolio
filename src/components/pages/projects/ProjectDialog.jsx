/* eslint-disable react/prop-types */
import { GitHub } from "@mui/icons-material";
import {
  Box,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  IconButton,
  Stack,
  Typography
} from "@mui/material";
import { Link } from "react-router-dom";
import Dialog from "../../common/Dialog";

function ProjectDialog({ project, open, handleCardClick }) {
  return (
    <Dialog open={open} handleClose={handleCardClick} value={project}>
      <Stack alignItems="center">
        <CardMedia
          component="img"
          sx={{
            width: { md: 350 }, // Set width for different screen sizes
            objectFit: "cover",
          }}
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
              <Chip
                key={index}
                variant="outlined"
                sx={{ m: 1 }}
                label={technology}
              />
            ))}
          </Box>
          <Divider />
        </CardContent>
      </Stack>

      <CardActions>
        <IconButton LinkComponent={Link} to={project?.links?.github}>
          <GitHub />
        </IconButton>

        <Button
          size="small"
          color="primary"
          LinkComponent={Link}
          target="__blank"
          to={project?.links?.docs}
        >
          Docs
        </Button>

        {project?.link?.demo && (
          <Button
            size="small"
            color="primary"
            LinkComponent={Link}
            target="__blank"
            to={project?.links?.demo}
          >
            Demo
          </Button>
        )}
      </CardActions>
    </Dialog>
  );
}

export default ProjectDialog;
