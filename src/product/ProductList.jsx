import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import Product from "./Product";
import { useImmer } from "use-immer";

export default function ProductList() {
  const [products, setProducts] = useImmer([]);
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

    //this using clean up, ex. when finish open socket the fist step so this is run to close the socket when component is remove
    return () => {
      console.info("Product List Component Unmounted");
    };
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
