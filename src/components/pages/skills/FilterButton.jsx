/* eslint-disable react/prop-types */
import { MenuItem, Select, Stack } from "@mui/material";
import { useState } from "react";

export default function FilterButtons({ skills = [], setFilterSkill }) {
  const [selectedType, setSelectedType] = useState("all");

  const handleChange = (event) => {
    const type = event.target.value;
    setSelectedType(type);

    if (type === "all") {
      setFilterSkill(skills);
      return;
    }

    const filteredSkills = skills?.filter((newVal) => newVal.type === type);
    setFilterSkill(filteredSkills);
  };

  return (
    <Stack direction="row" overflow="scroll">
      <Select value={selectedType} onChange={handleChange}>
        <MenuItem value="all">All</MenuItem>
        {skills?.map((skill, index) => (
          <MenuItem key={index} value={skill.type}>
            {skill.type}
          </MenuItem>
        ))}
      </Select>
    </Stack>
  );
}
