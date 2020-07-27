import React from "react";
import logo from "./logo.svg";
import "./App.css";

import ListItem from './components/ListItem'
import ListItem2 from './components/ListItem2'
import BookItem from './components/BookItem'

const App = () => {
  return (
    <div className="App">
      <ListItem title="Test" body="Hello World"/>
      <ListItem2 title="Test2" body="Hello World2"/>
      <BookItem book={{name: 'Harry Pot', author: 'JK'}}/>
    </div> 
  );
};

export default App;
