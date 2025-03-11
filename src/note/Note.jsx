import { useContext, useState } from "react";
import { NotesDispatchContext } from "./NoteContext";

export default function Note({ note }) {
  const dispatch = useContext(NotesDispatchContext);
  const [isEditing, setIsEditing] = useState(false);
  let component;

  function handleChangeText(e) {
    dispatch({
      ...note,
      type: "CHANGE_NOTE",
      text: e.target.value,
    });
  }

  if (isEditing) {
    component = (
      <>
        <input value={note.text} onChange={handleChangeText} />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    component = (
      <>
        {note.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  function handleChangeDone(e) {
    dispatch({
      ...note,
      type: "CHANGE_NOTE",
      done: e.target.checked,
    });
  }

  function handleOnDelete() {
    dispatch({
      ...note,
      type: "DELETE_NOTE",
      id: note.id,
    });
  }

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={note.done}
          onChange={handleChangeDone}
        />
        {component}
        <button onClick={handleOnDelete}>Delete</button>
      </label>
    </>
  );
}
