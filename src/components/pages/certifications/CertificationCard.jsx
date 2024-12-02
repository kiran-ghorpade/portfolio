/* eslint-disable react/prop-types */
import { GitHub } from "@mui/icons-material";
import {
  Box,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import CardHorizontal from "../../common/CardHorizontal";

function CertificationCard({ project, handleCardClick }) {
  // Horizontal Card
  return (
    <CardHorizontal>
      <CardMedia
        component="img"
        sx={{ width: 250 }}
        image={project?.image}
        alt={project?.title}
      />
      <Stack>
        <CardContent>
          <Stack gap={1} padding={2}>
            <Box>
              <Typography variant="h6">{project?.title}</Typography>
              <Typography variant="body2" color="textSecondary">
                {project?.description}
              </Typography>
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
            onClick={() => handleCardClick(project)}
          >
            More Info
          </Button>
        </CardActions>
      </Stack>
    </CardHorizontal>
  );
}

export default CertificationCard;
