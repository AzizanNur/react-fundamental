import NoteForm from "./NoteForm";
import NoteList from "./Notelist";
import { useReducer } from "react";

let id = 1;
const initialNotes = [
  { id: id++, text: "Learn HTML", done: false },
  { id: id++, text: "Learn CSS", done: true },
  { id: id++, text: "Learn JS", done: true },
  { id: id++, text: "Learn React", done: false },
];
export default function NoteApp() {
  const [notes, dispacth] = useReducer(notesRecuder, initialNotes);

  function notesRecuder(notes, action) {
    switch (action.type) {
      case "ADD_NOTE":
        return [
          ...notes,
          {
            id: id++,
            text: action.text,
            done: false,
          },
        ];
      case "CHANGE_NOTE":
        return notes.map((note) =>
          note.id === action.id
            ? { ...notes, text: action.text, done: action.done }
            : note
        );
      case "DELETE_NOTE":
        return notes.filter((note) => note.id !== action.id);
      default:
        return notes;
    }
  }

  function handleAddNote(text) {
    dispacth({
      type: "ADD_NOTE",
      text: text,
    });
  }

  function handleChangenote(note) {
    dispacth({
      type: "CHANGE_NOTE",
      id: note.id,
      text: note.text,
      done: note.done,
    });
  }

  function handleDeleteNote(note) {
    dispacth({
      type: "DELETE_NOTE",
      id: note.id,
    });
  }

  return (
    <div>
      <h1>Note App</h1>
      <NoteForm onAddNote={handleAddNote} />
      <NoteList
        notes={notes}
        onChange={handleChangenote}
        onDelele={handleDeleteNote}
      />
    </div>
  );
}
