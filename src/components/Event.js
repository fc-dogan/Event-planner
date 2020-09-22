import React from "react";
import PropTypes from "prop-types";
import { useFirestore} from 'react-redux-firebase';


function Event(props){

  const firestore = useFirestore();
  
  const handleDeletingEvent =() =>{
    return firestore.delete({collection: 'events', doc: props.id });
  }

  return (
    <React.Fragment>
      <div onClick = {() => props.whenEventClicked(props.id)}>
        <h3> {props.title}</h3>
        <h3> {props.location} </h3>
        <p>{props.eventDate} </p>
        <p><em>{props.description}</em></p>
        <p><em>{props.formattedWaitTime}</em></p>
      </div>
      <button onClick={handleDeletingEvent}>Delete</button>
    </React.Fragment>
  );
}

Event.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string,
  eventDate: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  formattedWaitTime: PropTypes.string,
  whenEventClicked: PropTypes.func
};

export default Event;