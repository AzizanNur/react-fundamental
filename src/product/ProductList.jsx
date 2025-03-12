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
    console.info("call use effect");
    if (load) {
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
