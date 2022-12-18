import React, { useState } from "react";
import { Link } from 'react-router-dom';

class AddNote extends React.Component {
  state = {
    title: "",
    text: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.title === "" || this.state.text === "") {
      alert("All the fields are mandatory!");
      return;
    }
    this.props.addNoteHandler(this.state)
    this.setState({title: "", text: ""})
  };

  render() {
    return (
      <div className="container" style={{ marginTop: "3vh" }}>
        <h2>
          Add Note
          <Link to="/">
            <button className="ui button black right floated segment">See Note List</button>
          </Link>
        </h2>
        <form onSubmit={this.add}>
          <div className="form-group">
            <label>
              <b>Note Title</b>
            </label>
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Enter Title"
              onChange={(e) => this.setState({ title: e.target.value })}
              value={this.state.title}
              style={{fontSize: "1.2rem", height: "5vh"}}
            />
          </div>
          <div className="form-group">
            <label>
              <b>Note Content</b>
            </label>
            <textarea
              className="form-control"
              rows="6"
              name="text"
              placeholder="Enter note text.."
              onChange={(e) => this.setState({ text: e.target.value })}
              value={this.state.text}
              style={{fontSize: "1.2rem"}}
            ></textarea>
          </div>
          <button className="ui button black left floated segment">Add</button>
        </form>
      </div>
    );
  }
}

export default AddNote;
