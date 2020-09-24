import React from 'react';
// import EventList from './EventList';
import PropTypes from "prop-types";
import { useFirestoreConnect, isLoaded, isEmpty,  } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import Event from './Event'
// import firebase from 'firebase/app';

function Dashboard(props) {
  let usersEventList ;
  let iscreator = true;

  useFirestoreConnect([
    { collection: 'events' }
  ]);

  const events = useSelector(state => state.firestore.ordered.events);
  if (isLoaded(events)) {
    usersEventList = events.filter( event => {
      return event.creator === props.currentUser.uid;
    }).map(event =>{
      return <Event
      creator = {iscreator}
      whenEventClicked= {props.onEventSelection }
      title={event.title}
      location={event.location}
      eventDate= {event.eventDate}
      description={event.description}
      formattedWaitTime={event.formattedWaitTime}
      id={event.id}
      key={event.id}
      />
    })
  }
  else {
    usersEventList =
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
  }

  return (
    <div className='dashboard container'>
      <div className='row'>
          <p>Welcome, {props.currentUser.email}!</p>
          <p>Events You've Created!</p>
          { usersEventList }
      </div>
    </div>
  )
}

Dashboard.propTypes ={
  currentUser: PropTypes.object,
  onEventSelection: PropTypes.func
}

export default Dashboard;
