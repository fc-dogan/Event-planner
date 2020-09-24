import React from 'react';
import Notifications from'./Notifications';
// import EventList from './EventList';
import PropTypes from "prop-types";
import { useFirestoreConnect, isLoaded, isEmpty, useFirestore } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import Event from './Event'
// import firebase from 'firebase/app';

function Dashboard(props) {
  let usersEventList ;
  let iscreator = true;

  useFirestoreConnect([
    { collection: 'events' }
  ]);
  // const firestore = useFirestore();
  
  // const handleDeletingEvent =() =>{
  //   return firestore.delete({collection: 'events', doc: props.id });
  // }

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
        <div className='col s12 m6'>
          <p>Welcome, {props.currentUser.email}!</p>
          <p>Events You've Created!</p>
          { usersEventList }
          {/* {console.log("eventsobj" + events)} */}
          {/* {console.log(" props.currentUser.uid" + props.currentUser.uid)} */}
        </div>
        {/* <div className='col s12 m5 offset-m1'>
          <Notifications />
        </div> */}
      </div>
    </div>
  )
}

Dashboard.propTypes ={
  currentUser: PropTypes.object,
  onEventSelection: PropTypes.func
}

export default Dashboard;
