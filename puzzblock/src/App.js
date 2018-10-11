import React, { Component } from 'react';
import style from './App.css';
import Game from './components/Game/Game';

class App extends Component {
  render() {
    return (
      <div className="centerDiv">
        <h1>Puzzlock</h1>
        <h2>This is a Work In Progress</h2>
        <h3>Feel free to send a PR :)</h3>

        <Game />

      </div>
    );
  }
}

export default App;
