import Todo from "./Todo";

export default function Todolist() {
  return (
    <>
      <ul>
        <Todo text="Belajar" isCompleted={false} />
        <Todo text="Menonton TV" isCompleted={true} />
        <Todo text="Mengaji" isCompleted={true} />
      </ul>
    </>
  );
}
