/* eslint-disable react/prop-types */
import DarkModeContextProvider from "./DarkModeContextProvider";
import InformationContextProvider from "./InformationContextProvider";

function ApplicationContextProvider({ children }) {
  return (
    <DarkModeContextProvider>
      <InformationContextProvider>{children}</InformationContextProvider>
    </DarkModeContextProvider>
  );
}

export default ApplicationContextProvider;
