import Note from "./Note";

export default function NoteList({ notes, onChange, onDelele }) {
  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          <Note note={note} onChange={onChange} onDelete={onDelele} />
        </li>
      ))}
    </ul>
  );
}
