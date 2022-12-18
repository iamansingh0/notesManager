import React, { useState } from "react";
import "./trash.css";
import logo from "../images/logo.png";

const NoteCard = (props) => {
  const [display, setDisplay] = useState("notdisplayed");
  const showButton = (e) => {
    e.preventDefault();
    setDisplay("displayed");
  };

  const hideButton = (e) => {
    e.preventDefault();
    setDisplay("notdisplayed");
  };

  const { id, title, text } = props.note;
  return (
    <div
      className="media rounded"
      onMouseEnter={(e) => showButton(e)}
      onMouseLeave={(e) => hideButton(e)}
      style={{
        padding: "20px 10px 20px 10px",
        margin: "5px",
        width: "23.4375vw",
        minHeight: "17vh",
        minWidth: "10.41666666666667",
        border: "3px solid #0275d8",
        fontSize: "1.1rem",
      }}
    >
      <img className="align-self-center mr-3" src={logo} alt="Note" />
      <div className="media-body">
        <h5
          className="mt-0"
          style={{
            marginBottom: "1vh",
            fontSize: "1.1rem",
          }}
        >
          {title}
        </h5>
        {text}
      </div>
      <div>
        <span className={display}>
          <i
            className="trash alternate outline icon right floated"
            style={{ color: "red" }}
            onClick={() => props.clickHandler(id)}
          ></i>
        </span>
      </div>
    </div>
  );
};

export default NoteCard;
