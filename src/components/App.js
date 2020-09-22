import React from 'react';
import Header from './Header';
import EventController from './EventController';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <EventController />
    </div>
  );
}

export default App;
