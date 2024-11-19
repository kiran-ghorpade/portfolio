/* eslint-disable react/prop-types */
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import SectionHead from "../common/SectionHead";
// import ProjectCard from "../common/ProjectCard";
import { useContext, useState } from "react";
import { InformationContext } from "../../services/context/InformationContextProvider";
import Skill from "./skills/Skill";

function SkillCard({ skill, direction, handleCardClick }) {
  // Horizontal Card
  if (direction === "horizontal")
    return (
      <Card
        elevation={1}
        sx={{ display: "flex", p: 2, cursor: "pointer" }}
        onClick={handleCardClick}
      >
        <CardMedia
          component="img"
          height={100}
          image={skill?.image}
          alt={skill?.title}
        />
        <CardContent>
          <Typography variant="h6">{skill?.name}</Typography>
          <Typography variant="subtitle2">{skill?.level}</Typography>
        </CardContent>
      </Card>
    );
}

function FilterButtons({ skills, filterData, setFilterData }) {
  const handleFilterClick = (type) => {
    const newItem = skills.filter((newVal) => {
      return newVal.type === type;
    });
    setFilterData(newItem);
  };

  return (
    <>
      <Stack direction="row">
        {skills?.map((skill, index) => (
          <Button
            color={
              filterData[0]?.type === skill?.type ? "primary" : "secondary"
            }
            key={index}
            onClick={() => handleFilterClick(skill?.type)}
          >
            {skill?.type}
          </Button>
        ))}
      </Stack>
    </>
  );
}

function SkillsPage() {
  const { skills } = useContext(InformationContext);
  const [filterSkill, setFilterSkill] = useState(skills || []);
  const [openSkillDialog, setOpenSkillDialog] = useState(false);
  const [skill, setSkill] = useState({});

  const handleCardClick = (skill) => {
    setOpenSkillDialog(!openSkillDialog);
    setSkill(skill);
  };

  return (
    <Container>
      <Stack alignItems="center" spacing={4}>
        <SectionHead>Skills</SectionHead>
        <FilterButtons
          skills={skills}
          filterData={filterSkill}
          setFilterData={setFilterSkill}
        />
        <Divider />

        <Grid2 container spacing={4} justifyContent="center">
          {filterSkill?.map((skill) =>
            skill?.values?.map((value, index) => (
              <Grid2 xs={8} sm={8} md={3} key={index}>
                <SkillCard
                  skill={value}
                  direction="horizontal"
                  handleCardClick={() => handleCardClick(value)}
                />
              </Grid2>
            ))
          )}
        </Grid2>

        <Skill
          skill={skill}
          open={openSkillDialog}
          handleCardClick={handleCardClick}
        />
      </Stack>
    </Container>
  );
}

export default SkillsPage;
