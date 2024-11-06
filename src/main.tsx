import React from "react";
import ReactFilePreview from "./components/ReactFilePreview";

import { createRoot } from "react-dom/client";

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const container = document.getElementById("app");
if (container) {
  const root = createRoot(container);
  root.render(<ReactFilePreview />);
} else {
  console.error("Failed to find the app container");
}
