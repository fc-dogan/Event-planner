import React from 'react';
import Dashboard from './Dashboard';

 class EventController extends React.Component {
  render() {
    return (
      <div>
        <p>Controller</p>
        <Dashboard />
      </div>
    )
  }
}

export default EventController;