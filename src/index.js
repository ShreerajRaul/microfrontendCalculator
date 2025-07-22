import React from "react";
import { createRoot } from "react-dom/client";
import Calculator from "./Calculator";

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(<Calculator />);
}

// Expose for WordPress
window.renderCalculator = (containerId) => {
  const container = document.getElementById(containerId);
  if (container) {
    createRoot(container).render(<Calculator />);
  }
};
