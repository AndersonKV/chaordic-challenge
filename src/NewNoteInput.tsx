import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";

interface NewNoteInputProps {
  addNote(note: string): void;
}

const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
  const [note, setNote] = useState("");

  const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
    console.log(event.target.value);
  };

  const onAddNoteClick = () => {
    addNote(note);
    setNote("");
  };

  return (
    <>
      <div>
        <input
          onChange={updateNote}
          value={note}
          type="text"
          name="note"
          placeholder="note"
        />
        <button onClick={onAddNoteClick}>add note</button>
      </div>
    </>
  );
};

export default NewNoteInput;
