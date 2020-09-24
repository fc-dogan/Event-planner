import React from 'react';
import Dashboard from './Dashboard';
import NewEventForm from './NewEventForm';
import EditEventForm from './EditEventForm';
import EventList from './EventList';
import EventDetails from './EventDetails';
import { connect } from 'react-redux';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import { Link } from 'react-router-dom';

 class EventController extends React.Component {
  constructor(props) {
    super(props);
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
    const { dispatch } = this.props;
    const action ={type: 'EDITING_EVENT'}
    dispatch(action);
  }

  handleClickToListfromDetail = () =>{
    const { dispatch } = this.props;
    const action2 = { type: "UNSELECT_EVENT"}
    dispatch(action2);
  }
  
  render() {
    let currentlyVisibleState = null;
    const auth = this.props.firebase.auth();
    if (!isLoaded(auth)) {
      return (
        <React.Fragment>
          <h1>Loading...</h1>
        </React.Fragment>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser == null)) {
      return (
        <React.Fragment>
          <h2>You must be signed in </h2>
          <button><Link to='/signin'>Sign In</Link></button>
          <button><Link to='/signup'>Sign up</Link></button>
        </React.Fragment>
      )
    } 
    if ((isLoaded(auth)) && (auth.currentUser != null)) {
      if (this.props.editingEvent ) {  
          currentlyVisibleState =
            <div>
              <EditEventForm selectedEvent={this.props.selectedEvent}
                onEditTicket ={this.handleEditClicking}/>
              <button onClick ={this.handleClickToListfromDetail} >Return to List</button>
            </div>   
      }  else if (this.props.selectedEvent!= null) {
        currentlyVisibleState=
        <div>
          <EventDetails currentUser = {auth.currentUser} selectedEvent= {this.props.selectedEvent}
          onClickingEdit={this.handleEditClicking} />
          <button onClick ={this.handleClickToListfromDetail} >Return to List</button>
        </div> 
      } else {
        currentlyVisibleState =
        <div className='main container'>
          <h2>All Events</h2>
        <div className='row'>
          <div className='col s12 m6'>
            <EventList onEventSelection={this.handleChangingSelectedEvent}/>
          </div>
          <div className='col s12 m5 offset-m1'>
              <NewEventForm creatorOfEvent={auth.currentUser.uid} />
              <Dashboard currentUser = {auth.currentUser} onEventSelection={this.handleChangingSelectedEvent} />
          </div>
        </div>
      </div>
      }
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
    selectedEvent: state.selectedEvent,
    editingEvent: state.editingEvent
  }
}

EventController = connect(mapStateToProps)(EventController);

export default  withFirestore(EventController);