// components/ListDemo.js
import React from 'react';
import Card from './Card'


const numbers = [1, 2, 3, 4, 5, 6];

const movies = [
  { title: "Jurassic Park", director: "Steven Spielberg" },
  { title: "Sharknado", director: "Anthony C. Ferrante" },
  { title: "Titanic", director: "James Cameron" }
];

// array of list item HTML elements that needs to be displayed
// index is used for the key which react requires to be unique for each element (related to loading individual elements as they are edited)
export const listItems = numbers.map((number, idx) => <li key={idx}>{number}</li>);

export const MoviesList = () => {
  return (
    <ul>
      {movies.map((oneMovie, idx) =>
        <Card key={idx} title={oneMovie.title} director={oneMovie.director} />)
      }
    </ul>
  )
};