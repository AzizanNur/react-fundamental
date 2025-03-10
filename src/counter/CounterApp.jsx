import { useState } from "react";
import Counter from "./Counter";

export default function CounterApp() {
  const [show2, setShow2] = useState(true);
  function onChange(e) {
    setShow2(e.target.checked);
  }

  return (
    <>
      <Counter />
      {show2 && <Counter />}
      <input type="checkbox" checked={show2} onChange={onChange} />
    </>
  );
}
