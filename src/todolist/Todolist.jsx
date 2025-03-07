import Todo from "./Todo";

export default function Todolist() {
  const data = [
    {
      id: 1,
      text: "Membaca",
      isCompleted: true,
    },
    {
      id: 2,
      text: "Menulis",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Berhitung",
      isCompleted: true,
    },
  ];

  return (
    <>
      <ul>
        {data.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
}
