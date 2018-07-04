import React, { Component } from 'react';
import './App.css';
import FavoriteCurrencies from "./containers/FavoriteCurrencies";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">NBP currency rates</h1>
        </header>
        <div className="App-intro">
          <FavoriteCurrencies />
        </div>
      </div>
    );
  }
}

export default App;
