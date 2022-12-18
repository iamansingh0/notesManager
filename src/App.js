import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AddNote from "./components/AddNote";
import NoteList from "./components/NoteList";
import uuid from "react-uuid";

function App() {
  const LOCAL_STORAGE_KEY = "notes";
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );
  const addNoteHandler = (note) => {
    console.log(note);
    setNotes([...notes, { id: uuid(), ...note }]);
  };

  const removeNoteHandler = (id) => {
    const newList = notes.filter((note) => {
      return note.id !== id;
    });
    setNotes(newList);
  };
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={<NoteList notes={notes} getNoteId={removeNoteHandler} />}
          ></Route>
          <Route
            path="/add"
            element={<AddNote addNoteHandler={addNoteHandler} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
