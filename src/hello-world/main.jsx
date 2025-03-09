import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import { StrictMode } from "react";
import Container from "./Container";
import Todolist from "../todolist/Todolist";
import AlertButton from "../button/AlertButton";
import OnSmash from "../button/OnSmash";
import Toolbar from "../button/Toolbar";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <HelloWorld />
      <Todolist />
      <AlertButton text="Klik Oke Lah" message="Alhamdulillah" />
      <OnSmash
        text="OnSmash"
        OnSmash={() => {
          alert("siap siap ini onSmash");
        }}
      />
      <Toolbar
        onClick={(e) => {
          e.stopPropagation();
          alert("halo ini toolbar");
        }}
      />
    </Container>
  </StrictMode>
);
