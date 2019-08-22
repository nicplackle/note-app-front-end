import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/layout/Header";
import Notes from "./components/Notes";
import AddNote from "./components/AddNote";
import About from "./components/pages/About";

class App extends Component {
  state = {
    notes: [
      {
        id: 1,
        title: "Learn React",
        completed: false
      },
      {
        id: 2,
        title: "Get frustrated about it",
        completed: false
      },
      {
        id: 3,
        title: "Get over it",
        completed: false
      }
    ]
  };

  // toggle complete
  markComplete = id => {
    this.setState({
      notes: this.state.notes.map(note => {
        if (note.id === id) {
          note.completed = !note.completed;
        }
        return note;
      })
    });
  };

  // delete Note (... = spread operator)
  delNote = id => {
    this.setState({
      notes: [...this.state.notes.filter(note => note.id !== id)]
    });
  };

  // add Note
  addNote = title => {
    const newNote = {
      /* id has to be unique so has to come from api */
      id: 4,
      title,
      completed: false
    };
    this.setState({ notes: [...this.state.notes, newNote] });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddNote addNote={this.addNote} />
                  <Notes
                    notes={this.state.notes}
                    markComplete={this.markComplete}
                    delNote={this.delNote}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
