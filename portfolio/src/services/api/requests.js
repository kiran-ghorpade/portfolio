// Request to fetch data from public folder

// Personal Information
export async function fetchPersonalInfo() {
  try {
    const response = await fetch("/config/personalInfo.json");
    return await response.json();
  } catch (err) {
    return console.error("Error loading social accounts:", err);
  }
}

export async function fetchHobbiesInfo() {
  try {
    const response = await fetch("/config/hobbies.json");
    return await response.json();
  } catch (err) {
    return console.error("Error loading social accounts:", err);
  }
}

export async function fetchLanguagesInfo() {
  try {
    const response = await fetch("/config/languages.json");
    return await response.json();
  } catch (err) {
    return console.error("Error loading social accounts:", err);
  }
}

// Social Account Links
export async function fetchSocialAccountInfo() {
  try {
    const response = await fetch("/config/socialAccounts.json");
    return await response.json();
  } catch (err) {
    return console.error("Error loading social accounts:", err);
  }
}

// Education
export async function fetchEducationInfo() {
  try {
    const response = await fetch("/config/Education.json");
    return await response.json();
  } catch (err) {
    return console.error("Error loading social accounts:", err);
  }
}

//  Skills, Projects, Certifications
export async function fetchSkillSet() {
  try {
    const response = await fetch("/config/skillSet.json");
    return await response.json();
  } catch (err) {
    return console.error("Error loading social accounts:", err);
  }
}

export async function fetchProjectsInfo() {
  try {
    const response = await fetch("/config/projects.json");
    return await response.json();
  } catch (err) {
    return console.error("Error loading social accounts:", err);
  }
}

export async function fetchCertificationsInfo() {
  try {
    const response = await fetch("/config/certifications.json");
    return await response.json();
  } catch (err) {
    return console.error("Error loading social accounts:", err);
  }
}
