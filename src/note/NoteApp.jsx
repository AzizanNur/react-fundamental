import { useImmerReducer } from "use-immer";
import NoteForm from "./NoteForm";
import NoteList from "./Notelist";

let id = 1;
const initialNotes = [
  { id: id++, text: "Learn HTML", done: false },
  { id: id++, text: "Learn CSS", done: true },
  { id: id++, text: "Learn JS", done: true },
  { id: id++, text: "Learn React", done: false },
];
export default function NoteApp() {
  const [notes, dispacth] = useImmerReducer(notesRecuder, initialNotes);

  function notesRecuder(notes, action) {
    switch (action.type) {
      case "ADD_NOTE":
        notes.push({
          id: id++,
          text: action.text,
          done: false,
        });
        break;

      case "CHANGE_NOTE":
        const index = notes.findIndex((note) => note.id === action.id);
        notes[index].text = action.text;
        notes[index].done = action.done;
        break;
      case "DELETE_NOTE":
        const indexDel = notes.findIndex((note) => note.id === action.id);
        notes.splice(indexDel, 1);
        break;
      default:
        return notes;
        break;
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
