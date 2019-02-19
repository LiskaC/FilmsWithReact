import React, { Component } from 'react';

import ImprovedCard from './ImprovedCard';
import AddMovie from './AddMovie';


//new component - both class and stateful
class DynamicMoviesList extends Component {
  constructor() {
    super(); //this runs React's Components constructor. NECESSARY/good practice
    this.state = {
      movies: [
        { title: "The Godfather", director: "Francis Coppola", hasOscars: true, IMDbRating: 9.2 },
        { title: "Star Wars", director: "Rian Johnson", hasOscars: true, IMDbRating: 8.7 },
        { title: "The Shawshank Redemption", director: "Frank Darabont", hasOscars: false, IMDbRating: 9.3 }
      ],
      showOscarAwarded: false //<== add
    }
  }

  toggleMovies() {
    this.setState({
      movies: this.state.movies,
      showOscarAwarded: !this.state.showOscarAwarded

    })
  }

  deleteLastMovie() {
    this.setState({ //to modify state of Component, has to be this.setState
      movies: this.state.movies.slice(0, 2) //removes last movie
    })
  }

  deleteMovie(index) {
    this.state.movies.splice(index, 1) //this is a bad idea because splice modifies the original array. use library, or create new array and then splice
    const newMoviesArr = this.state.movies
    this.setState({
      movies: newMoviesArr
    })
  }

  filteredMovies;

  addMovieHandler = (theMovie) => {
    const moviesCopy = [...this.state.movies];
    moviesCopy.push(theMovie);
    this.setState({
      movies: moviesCopy
    })
  }

  //after the data has changed, React automatically re-renders

  render() {
    // leave this console.log() so we can keep track of our state inside our browser's console
    console.log(this.state.movies);

    return (
      <div>
        <AddMovie addTheMovie={(e) => this.addMovieHandler(e)} />
        {/* generates movies list */}
        {
          this.state.movies.map((oneMovie, index) => {
            return <ImprovedCard key={index}
              clickToDelete={() => this.deleteMovieHandler(index)}
              title={oneMovie.title}
              director={oneMovie.director}
              hasOscars={oneMovie.hasOscars}
              IMDBrating={oneMovie.IMDBrating} />
            // TODO 
            // this is a bug, FIXME
            //some code to be rendered will come here
          })
        }

        <button onClick={() => this.toggleMovies()}>
          {this.state.showOscarAwarded ? 'Hide Oscar Awarded' : 'Show Oscar Awarded'}
        </button>


        <button onClick={() => { this.deleteLastMovie() }}>Delete Last Movie</button>
      </div>
    );
  }
}

export default DynamicMoviesList;