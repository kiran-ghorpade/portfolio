// Requests to fetch data from public folder

const base = "/portfolio/config";

const requestLink = {
  PersonalInformation: `${base}/personalInfo.json`,
  Hobbies: `${base}/hobbies.json`,
  Languages: `${base}/languages.json`,
  SocialAccounts: `${base}/socialAccounts.json`,
  Education: `${base}/education.json`,
  Skills: `${base}/skills.json`,
  Projects: `${base}/projects.json`,
  Certifications: `${base}/certifications.json`,
  Repository: "https://api.github.com/repos/kiran-ghorpade/portfolio",
};

// ---------------------------------------------------------------------
// Personal Information
// ---------------------------------------------------------------------
export async function fetchPersonalInfo() {
  try {
    const response = await fetch(requestLink.PersonalInformation);
    return await response.json();
  } catch (err) {
    return console.error("Error Loading Information ", err);
  }
}

export async function fetchHobbiesInfo() {
  try {
    const response = await fetch(requestLink.Hobbies);
    return await response.json();
  } catch (err) {
    return console.error("Error Loading Information ", err);
  }
}

export async function fetchLanguagesInfo() {
  try {
    const response = await fetch(requestLink.Languages);
    return await response.json();
  } catch (err) {
    return console.error("Error Loading Information ", err);
  }
}

// ---------------------------------------------------------------------
// Social Account Links
// ---------------------------------------------------------------------
export async function fetchSocialAccountInfo() {
  try {
    const response = await fetch(requestLink.SocialAccounts);
    return await response.json();
  } catch (err) {
    return console.error("Error Loading Information ", err);
  }
}

// ---------------------------------------------------------------------
// Education
// ---------------------------------------------------------------------
export async function fetchEducationInfo() {
  try {
    const response = await fetch(requestLink.Education);
    return await response.json();
  } catch (err) {
    return console.error("Error Loading Information ", err);
  }
}

// ---------------------------------------------------------------------
//  Skills, Projects, Certifications
// ---------------------------------------------------------------------
export async function fetchSkills() {
  try {
    const response = await fetch(requestLink.Skills);
    return await response.json();
  } catch (err) {
    return console.error("Error Loading Information ", err);
  }
}

export async function fetchProjectsInfo() {
  try {
    const response = await fetch(requestLink.Projects);
    return await response.json();
  } catch (err) {
    return console.error("Error Loading Information ", err);
  }
}

export async function fetchCertificationsInfo() {
  try {
    const response = await fetch(requestLink.Certifications);
    return await response.json();
  } catch (err) {
    return console.error("Error Loading Information ", err);
  }
}

// ---------------------------------------------------------------------
//  About Portfolio
// ---------------------------------------------------------------------
export async function fetchRepositoryInfo() {
  try {
    const response = await fetch(requestLink.Repository);
    return await response.json();
  } catch (err) {
    return console.error("Error Loading Information ", err);
  }
}
