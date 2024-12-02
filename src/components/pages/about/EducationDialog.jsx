/* eslint-disable react/prop-types */
import {
  DialogContentText,
  Divider,
  Stack,
  Typography
} from "@mui/material";
import Dialog from "../../common/Dialog";

// {
//   "degree": "Bachelor of Technology in Computer Science",
//   "institution": "University of Pune",
//   "duration": "2016 - 2020",
//   "location": "Pune, Maharashtra",
//   "description": "Specialized in Software Development, Data Structures, and Web Development.",
//   "achievements": [
//     "Graduated with a 3.8 GPA.",
//     "Completed a capstone project on building a real-time chat application.",
//     "Won the first prize in the University Hackathon 2019."
//   ]
// }

function EducationDialog({ education, open, handleCardClick }) {
  return (
    <Dialog open={open} handleClose={handleCardClick} value={education}>
      <Stack>
        <Typography variant="h5">{education?.degree}</Typography>
        <DialogContentText variant="body1">
          {education?.description}
        </DialogContentText>
        <DialogContentText variant="caption">
          {education?.duration}
        </DialogContentText>
        <DialogContentText variant="caption">
          {education?.institution}
        </DialogContentText>
        <DialogContentText variant="caption">
          {education?.location}
        </DialogContentText>
        <Divider />
        <Stack gap={1}>
          <Typography variant="subtitle1">Achievments :</Typography>
          {education?.achievements?.map((achievement, index) => (
            <Typography variant="caption" key={index}>
              {achievement}
            </Typography>
          ))}
        </Stack>
      </Stack>
    </Dialog>
  );
}

export default EducationDialog;
