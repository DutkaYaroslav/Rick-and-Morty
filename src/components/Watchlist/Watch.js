import React, { Component } from 'react';
import AddWatch from './AddWatch';
import WatchList from './WatchList';

class Watchlist extends Component {
  state = {
    notes: [],
  };

  addWhatToWatchHandler = (uName, uSeries) => {
    // const { notes } = this.state;
    console.log(uName, uSeries);
    this.setState((prevToWatch) => {
      return {
        notes: [
          ...prevToWatch.notes,
          { name: uName, series: uSeries, id: Math.random().toString() },
        ],
      };
    });
  };

  componentDidMount() {
    const persistedNotes = localStorage.getItem('notes');
    if (persistedNotes) {
      this.setState({
        notes: JSON.parse(persistedNotes),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.notes !== this.state.notes) {
      localStorage.setItem('notes', JSON.stringify(this.state.notes));
    }
  }

  removenote = (noteId) => {
    this.setState((prevState) => {
      return {
        notes: prevState.notes.filter((note) => note.id !== noteId),
      };
    });
  };

  render() {
    return (
      <>
        <AddWatch onAddWatch={this.addWhatToWatchHandler} />
        <WatchList
          onRemove={this.removenote}
          onSeriesToWatch={this.state.notes}
        />
      </>
    );
  }
}

export default Watchlist;
