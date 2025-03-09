import { useState } from "react";

export default function Counter() {
  let [counter, setCounter] = useState(0);

  function handleClik() {
    setCounter(counter + 1);
    console.log(counter);
  }
  return (
    <>
      <button onClick={handleClik}>Increment</button>
      <h1>Counter: {counter}</h1>
    </>
  );
}
