import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import Product from "./Product";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const loaded = useRef(false);

  useEffect(() => {
    if (!loaded.current) {
      fetch("/products.json")
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
          loaded.current = true;
        });
    }
  });

  return (
    <>
      <h1>Product List</h1>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  );
}
