import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import Product from "./Product";
import { useImmer } from "use-immer";

export default function ProductList() {
  const [products, setProducts] = useImmer([]);
  const [load, setLoad] = useState(false);
  const loaded = useRef(false);

  function handelProduct() {
    setLoad(true);
  }

  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch("/products.json");
      const data = await response.json();
      setProducts(data);
    }

    if (load) {
      fetchProduct();
    }
  }, [load]);

  return (
    <>
      <h1>Product List</h1>
      <button onClick={handelProduct}>Load Products</button>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  );
}
