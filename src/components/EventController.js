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

  handleClickToListfromDetail = () =>{
    const { dispatch } = this.props;
    const action2 = { type: "UNSELECT_EVENT"}
    dispatch(action2);
  }

  
  render() {
    let currentlyVisibleState = null;
    if (this.state.editing ) {      
      currentlyVisibleState =  <EditEventForm selectedEvent={this.props.selectedEvent}/>;
    }  else if (this.props.selectedEvent!= null) {
      currentlyVisibleState=
      <div>
        <EventDetails selectedEvent= {this.props.selectedEvent}
        onClickingEdit={this.handleEditClicking} />
        <button onClick ={this.handleClickToListfromDetail} >Return to List</button>
      </div> 
    } else {
      currentlyVisibleState = <div>
        <NewEventForm />
        <EventList onEventSelection={this.handleChangingSelectedEvent}/>
        <Dashboard />
        
      </div>
    }

    return (
      <div>
        <p>Controller</p>
        {currentlyVisibleState}
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