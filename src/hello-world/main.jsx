import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import { StrictMode } from "react";
import Container from "./Container";
import Todolist from "../todolist/Todolist";
import AlertButton from "../button/AlertButton";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <HelloWorld />
      <Todolist />
      <AlertButton text="Klik Oke Lah" message="Alhamdulillah" />
    </Container>
  </StrictMode>
);
