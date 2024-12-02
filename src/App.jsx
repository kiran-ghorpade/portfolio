import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "aos/dist/aos.css";
import Aos from "aos";

import AppRoutes from "./routes/AppRoutes";
import ApplicationContextProvider from "./services/context/ApplicationContextProvider";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({ duration: 800, easing: "ease-out-cubic" });
  }, []);

  return (
    <ApplicationContextProvider>
      <AppRoutes />
    </ApplicationContextProvider>
  );
}

export default App;
