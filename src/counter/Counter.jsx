import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <h1>Counter {count}</h1>
      <div>
        <button onClick={handleClick}>Increment</button>
      </div>
    </>
  );
}
