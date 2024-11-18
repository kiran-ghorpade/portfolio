// Requests to fetch data from public folder

const requestLink = {
  PersonalInformation: "/config/personalInfo.json",
  Hobbies: "/config/hobbies.json",
  Languages: "/config/languages.json",
  SocialAccounts: "/config/socialAccounts.json",
  Education: "/config/education.json",
  Skills: "/config/skills.json",
  Projects: "/config/projects.json",
  Certifications: "/config/certifications.json",
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
