import React from 'react';
import Dashboard from './Dashboard';
import NewEventForm from './NewEventForm';
import EditEventForm from './EditEventForm';
import EventList from './EventList';
import { withFirestore } from 'react-redux-firebase'

 class EventController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedEvent: null,
      editing: false
    };
  }


  handleChangingSelectedEvent = (id) => {
    this.props.firestore.get({collection: 'events', doc: id}).then((event) => {
      const firestoreEvent = {
        title: event.get("title"),
        location: event.get("location"),
        eventDate: event.get("eventDate"),
        description: event.get("description"),
        id: event.id
      }
      this.setState({selectedEvent: firestoreEvent });
    });
  }

  render() {
    return (
      <div>
        <p>Controller</p>
        <NewEventForm />
        <EventList onEventSelection={this.handleChangingSelectedEvent}/>
        <Dashboard />
      </div>
    )
  }
}

export default  withFirestore(EventController);