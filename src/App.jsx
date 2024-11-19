import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import AppRoutes from "./routes/AppRoutes";
import ApplicationContextProvider from "./services/context/ApplicationContextProvider";

function App() {
  return (
    <ApplicationContextProvider>
      <AppRoutes/>
    </ApplicationContextProvider>
  );
}

export default App;
