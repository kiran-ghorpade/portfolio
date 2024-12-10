import { Container, Divider, Grid2, Stack } from "@mui/material";
import SectionHead from "../common/SectionHead";
// import ProjectCard from "../common/ProjectCard";
import { useContext, useState } from "react";
import { InformationContext } from "../../services/context/InformationContextProvider";
import FilterButtons from "./skills/FilterButton";
import SkillDialog from "./skills/SkillDialog";
import SkillCard from "./skills/SkillCard";

function SkillsPage() {
  const { skills } = useContext(InformationContext);
  const [filterSkill, setFilterSkill] = useState(skills);
  const [openSkillDialog, setOpenSkillDialog] = useState(false);
  const [skill, setSkill] = useState({});

  const handleCardClick = (skill) => {
    setOpenSkillDialog(!openSkillDialog);
    setSkill(skill);
  };


  return (
    <Container>
      <Stack alignItems="center" spacing={4} data-aos="fade-up">
        <SectionHead>Skills</SectionHead>
        <FilterButtons skills={skills} setFilterSkill={setFilterSkill} />
        <Divider />

        <Grid2 container spacing={{md:4, xs:2}}>
          {filterSkill?.map((skill) =>
            skill?.values?.map((value, index) => (
              <Grid2 size={{ md: 3, xs: 6 }} key={index} data-aos="fade-up">
                <SkillCard
                  skill={value}
                  direction="horizontal"
                  handleCardClick={() => handleCardClick(value)}
                />
              </Grid2>
            ))
          )}
        </Grid2>

        <SkillDialog
          skill={skill}
          open={openSkillDialog}
          handleCardClick={handleCardClick}
        />
      </Stack>
    </Container>
  );
}

export default SkillsPage;
