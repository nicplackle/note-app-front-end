import React, { Component } from "react";
import PropTypes from "prop-types";

export class NoteItem extends Component {
  getStyle = () => {
    return {
      background: "#f1f1f1",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.note.completed ? "line-through" : "none"
    };
  };

  render() {
    const { id, title } = this.props.note;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button onClick={this.props.delNote.bind(this, id)} style={btnStyle}>
            X
          </button>
        </p>
      </div>
    );
  }
}

// PropTypes
NoteItem.propTypes = {
  note: PropTypes.object.isRequired
};

const btnStyle = {
  background: "red",
  color: "#f1f1f1f1",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
};

export default NoteItem;
