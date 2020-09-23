import React from 'react';
import Header from './Header';
import EventController from './EventController';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewEventForm from './NewEventForm';
import EventDetails from './EventDetails';
import EventList from './EventList';
import EditEventForm from './EditEventForm';
import Signin from './Signin';
import Signup from './Signup';
import Signout from './Signout';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/signout">
          <Signout />
        </Route>
        <Route path="/newevent">
          <NewEventForm />
        </Route>
        {/* <Route path="/event/:id">
          <EventDetails />
        </Route>
        <Route path="/eventlist">
          <EventList />
        </Route>
        <Route path="/editevent">
          <EditEventForm />
        </Route> */}
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
