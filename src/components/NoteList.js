import React from "react";
import NoteCard from "./NoteCard";
import { Link } from 'react-router-dom';

const NoteList = (props) => {
  const deleteNoteHandler = (id) => {
    props.getNoteId(id);
  };
  const renderNotesList = props.notes.map((note) => {
    return (
      <NoteCard note={note} clickHandler={deleteNoteHandler} key={note.id} />
    );
  });
  return (
    <div>
      <h2 style={{ marginTop: "3vh", marginBottom: "3vh" }}>
        Note List
        <Link to="/add" >
          <button className="ui button black right floated segment">Add Note</button>
        </Link>
      </h2>
      <div className="d-flex flex-row bd-highlight flex-wrap">
        {renderNotesList}
      </div>
    </div>
  );
};

export default NoteList;
