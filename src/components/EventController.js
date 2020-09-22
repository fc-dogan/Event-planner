import React from 'react';
import Dashboard from './Dashboard';
import NewEventForm from './NewEventForm';
import EditEventForm from './EditEventForm';
import EventList from './EventList';
import EventDetails from './EventDetails';
import { withFirestore } from 'react-redux-firebase'
import { connect } from 'react-redux';

 class EventController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // selectedEvent: null,
      editing: false
    };
  }


  handleChangingSelectedEvent = (id) => {
    const { dispatch } = this.props;
    this.props.firestore.get({collection: 'events', doc: id}).then((event) => {
      const action = {
        type: "UPDATE_SELECTED",
        title: event.get("title"),
        location: event.get("location"),
        eventDate: event.get("eventDate"),
        description: event.get("description"),
        id: event.id
      }
      dispatch(action);
    });
  }

  handleEditClicking =() =>{
    this.setState({editing: true});
  }

  render() {
    return (
      <div>
        <p>Controller</p>
        <NewEventForm />
        <EventList onEventSelection={this.handleChangingSelectedEvent}/>
        <Dashboard />
        <EditEventForm selectedEvent={this.props.selectedEvent}/>
        <EventDetails selectedEvent= {this.props.selectedEvent}
        onClickingEdit={this.handleEditClicking} />
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    selectedEvent: state.selectedEvent
  }
}

EventController = connect(mapStateToProps)(EventController);

export default  withFirestore(EventController);