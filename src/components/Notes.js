import React, { Component } from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";

class Notes extends Component {
  render() {
    return this.props.notes.map(note => (
      <NoteItem
        key={note.id}
        note={note}
        markComplete={this.props.markComplete}
        delNote={this.props.delNote}
      />
    ));
  }
}

// PropTypes
Notes.propTypes = {
  notes: PropTypes.array.isRequired
};

export default Notes;
