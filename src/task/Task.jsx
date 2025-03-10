import { useImmer } from "use-immer";
import TaskForm from "./TaskForm";
import TaskLisk from "./TaskList";

export default function Task() {
  const [items, setItems] = useImmer([]);
  return (
    <>
      <TaskForm setItems={setItems} />
      <TaskLisk items={items} />
    </>
  );
}
