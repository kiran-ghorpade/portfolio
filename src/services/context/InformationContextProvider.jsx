/* eslint-disable react/prop-types */
import { createContext } from "react";
import useFetchInformation from "../hooks/useFetchInformation";

// eslint-disable-next-line react-refresh/only-export-components
export const InformationContext = createContext();

function InformationContextProvider({ children }) {
  // data from a hook
  const {
    personalInfo,
    socialAccounts,
    languages,
    hobbies,
    education,
    projects,
    skills,
    certifications,
    repositoryInfo,
    loading,
    error,
  } = useFetchInformation();
  
  return (
    <InformationContext.Provider
      value={{
        personalInfo,
        socialAccounts,
        languages,
        hobbies,
        education,
        projects,
        skills,
        certifications,
        repositoryInfo,
        loading,
        error,
      }}
    >
      {children}
    </InformationContext.Provider>
  );
}

export default InformationContextProvider;
