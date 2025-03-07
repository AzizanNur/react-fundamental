import { createRoot } from "react-dom/client";
import { HeaderParagraf, HelloWorld } from "./HelloWorld";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelloWorld />
    <HeaderParagraf />
  </StrictMode>
);
