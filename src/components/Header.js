import React from 'react';
import logo from '../logo.svg';

import Title from './Title'

const header = (props) => {

  return (
    <header className="App-header">

      <img src={logo} className="App-logo" alt="logo" />
      <Title data="Welcome to React, Ironhacker!"></Title>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
          </a>
    </header>
  )
}

export default header;
export const someGiraffe = "bla"
export const someOtherGiraffe = "bla"

//import Header from components "./components/Header"
//import { someGiraffe } from "./components/Header"
//import { someGiraffe, someOtherGiraffe } from "./components/Header"

//import Header, { someGiraffe, someOtherGiraffe } from components "./components/Header"