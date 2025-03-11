import { useImmerReducer } from "use-immer";
import NoteForm from "./NoteForm";
import NoteList from "./Notelist";
import { NotesContext, NotesDispatchContext } from "./NoteContext";

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
    }
  }

  return (
    <div>
      <NotesContext.Provider value={notes}>
        <NotesDispatchContext.Provider value={dispacth}>
          <h1>Note App</h1>
          <NoteForm />
          <NoteList />
        </NotesDispatchContext.Provider>
      </NotesContext.Provider>
    </div>
  );
}
