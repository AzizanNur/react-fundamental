import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ProductList from "./ProductList";
import Product from "./Product";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductList />
  </StrictMode>
);
