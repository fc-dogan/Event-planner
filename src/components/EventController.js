import React from 'react';
import Dashboard from './Dashboard';
import NewEventForm from './NewEventForm';
import EditEventForm from './EditEventForm';

 class EventController extends React.Component {
  render() {
    return (
      <div>
        <p>Controller</p>
        <NewEventForm />
        <Dashboard />
      </div>
    )
  }
}

export default EventController;