import React, { Component } from 'react';
import './App.css';

import Header from "./components/Header.js";
// import { listItems, MoviesList } from './components/ListDemo';
import DynamicMoviesList from './components/DynamicMoviesList'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <ul>{listItems}</ul> */}
        <div>
          {/* <MoviesList /> */}
          <DynamicMoviesList />
        </div>
      </div>
    );
  }
}

export default App;
