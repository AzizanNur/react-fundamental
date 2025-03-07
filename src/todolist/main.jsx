import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Todolist from "../todolist/Todolist";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Todolist />
  </StrictMode>
);
