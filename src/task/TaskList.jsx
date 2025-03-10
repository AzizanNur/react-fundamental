export default function TaskLisk({ items = [] }) {
  return (
    <>
      <h2>List Task</h2>
      <ul>
        {items.map((data, index) => (
          <li key={index}>{data}</li>
        ))}
      </ul>
    </>
  );
}
