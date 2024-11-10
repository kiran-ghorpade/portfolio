import { useState, useEffect } from "react";
import {
  fetchCertificationsInfo,
  fetchEducationInfo,
  fetchHobbiesInfo,
  fetchLanguagesInfo,
  fetchPersonalInfo,
  fetchProjectsInfo,
  fetchSkillSet,
  fetchSocialAccountInfo,
} from "../api/requests";

function useFetchInformation() {
  const [personalInfo, setPersonalInfo] = useState(null);
  const [socialAccounts, setSocialAccounts] = useState(null);
  const [languages, setLanguages] = useState(null);
  const [hobbies, setHobbies] = useState(null);
  const [education, setEducation] = useState(null);
  const [projects, setProjects] = useState(null);
  const [skills, setSkills] = useState(null);
  const [certifications, setCertifications] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {

      try {
        setLoading(true);
        const [
          personalInfoData,
          socialAccountsData,
          languagesData,
          hobbiesData,
          educationData,
          projectsData,
          skillsData,
          certificationsData,
        ] = await Promise.all([
          fetchPersonalInfo(),
          fetchSocialAccountInfo(),
          fetchLanguagesInfo(),
          fetchHobbiesInfo(),
          fetchEducationInfo(),
          fetchProjectsInfo(),
          fetchSkillSet(),
          fetchCertificationsInfo(),
        ]);

        setPersonalInfo(personalInfoData);
        setSocialAccounts(socialAccountsData);
        setLanguages(languagesData);
        setHobbies(hobbiesData);
        setEducation(educationData);
        setProjects(projectsData);
        setSkills(skillsData);
        setCertifications(certificationsData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    // Call the fetch function
    fetchData();
  }, []);

  return {
    personalInfo,
    socialAccounts,
    languages,
    hobbies,
    education,
    projects,
    skills,
    certifications,
    loading,
    error,
  };
}

export default useFetchInformation;