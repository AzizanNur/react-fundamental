import { useState } from "react";
import { useImmer } from "use-immer";

export default function Task() {
  const [item, setItem] = useState("");
  const [items, setItems] = useImmer([]);
  function handleChange(e) {
    setItem(e.target.value);
  }
  function handleClick(e) {
    e.preventDefault();
    setItems((items) => {
      items.push(item);
    });
    setItem("");
    console.log(item, items);
  }
  return (
    <>
      <h1>Create Task</h1>
      <form>
        <input type="text" value={item} onChange={handleChange} />
        <button onClick={handleClick}>Add</button>
      </form>
      <h2>List Task</h2>
      <ul>
        {items.map((data, index) => (
          <li key={index}>
            {index}. {data}
          </li>
        ))}
      </ul>
    </>
  );
}
