/* eslint-disable react/prop-types */
import { GitHub } from "@mui/icons-material";
import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Stack,
  Typography
} from "@mui/material";
import { Link } from "react-router-dom";
import CardHorizontal from "../../common/CardHorizontal";

function CertificationsCard({ project, handleCardClick }) {
  return (
    <CardHorizontal>
      <CardMedia
        component="img"
        sx={{
          width: { md: 250 }, // Set width for different screen sizes
          objectFit: "cover",
          p: 2,
        }}
        image={project?.image}
        alt={project?.title}
      />
      <Stack width="100%">
        <CardContent>
          <Stack minHeight={150} justifyContent="space-between">
            <Typography variant="h6">{project?.title}</Typography>
            <Typography variant="body2" color="textSecondary">
              {project?.description}
            </Typography>
            <Typography variant="caption">{project?.duration}</Typography>
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
            target="_blank"
            to={project?.links?.docs}
          >
            Docs
          </Button>

          {project?.link?.demo && (
            <Button
              size="small"
              color="primary"
              LinkComponent={Link}
              target="_blank"
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

export default CertificationsCard;
