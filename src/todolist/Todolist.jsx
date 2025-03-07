import Todo from "./Todo";

export default function Todolist() {
  const data = [
    {
      text: "Membaca",
      isCompleted: true,
    },
    {
      text: "Menulis",
      isCompleted: false,
    },
    {
      text: "Berhitung",
      isCompleted: true,
    },
  ];

  const todos = data.map((todo) => <Todo {...todo} />);

  return (
    <>
      <ul>{todos}</ul>
    </>
  );
}
