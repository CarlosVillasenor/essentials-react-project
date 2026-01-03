import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

// Get the root element from the HTML.
const entryPoint = document.getElementById("root");
// Create a root React DOM node and render the App component into it.
ReactDOM.createRoot(entryPoint).render(<App />);
