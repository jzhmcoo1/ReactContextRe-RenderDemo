// import { StrictMode, ReactDOM } from "react";
// strict mode 触发两次render
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(<App />);
