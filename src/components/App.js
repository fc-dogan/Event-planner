import React from 'react';
import Header from './Header';
import EventController from './EventController';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewEventForm from './NewEventForm';
import EventDetails from './EventDetails';
import EventList from './EventList';
import EditEventForm from './EditEventForm';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        {/* <Route path="/signin">
          <Signin />
        </Route> */}
        <Route path="/newevent">
          <NewEventForm />
        </Route>
        <Route path="/eventdetails">
          <EventDetails />
        </Route>
        <Route path="/eventlist">
          <EventList />
        </Route>
        <Route path="/editevent">
          <EditEventForm />
        </Route>
        <Route path="/">
          <EventController />
        </Route>
      </Switch>
    </Router>
    // <div className="App">
    //   <Header />
    //   <EventController />
    // </div>
  );
}

export default App;
