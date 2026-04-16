/**
 * Application entry point for the React Essentials app.
 *
 * This file serves as the main entry point for the React application.
 * It sets up the React root and renders the main App component into
 * the DOM, initializing the entire React Essentials learning application.
 */

import ReactDOM from "react-dom/client";

import App from "./App.js";
import "./index.css";

// Get the root element from the HTML.
const entryPoint = document.getElementById("root") as HTMLDivElement;
// Create a root React DOM node and render the App component into it.
ReactDOM.createRoot(entryPoint).render(<App />);
