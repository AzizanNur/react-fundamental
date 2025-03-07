import Todo from "./Todo";

export default function Todolist() {
  return (
    <>
      <Todo text="Belajar" isCompleted={false} />
      <Todo text="Menonton TV" isCompleted={true} />
    </>
  );
}
