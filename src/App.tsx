import { AppProvider } from "./context/AppContext";
import "./styles.css";

import Count from "./components/Count";
import Pure from "./components/Pure";
import Data from "./components/Data";

export default function App() {
  console.log("App Render");

  return (
    <AppProvider>
      <div className="App">
        <Count />
        <Pure />
        <Data />
      </div>
    </AppProvider>
  );
}
