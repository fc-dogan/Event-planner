import React from "react";
import PropTypes from "prop-types";
import { useFirestore} from 'react-redux-firebase';
import { Link } from 'react-router-dom';

function Event(props){

  const firestore = useFirestore();
  
  const handleDeletingEvent =() =>{
    return firestore.delete({collection: 'events', doc: props.id });
  }
   const renderDeleteButton = () =>{
    if(props.creator === true ) {
      return ( 
        <button onClick={handleDeletingEvent}>Delete</button>
      )
    }
    else{
      return "";
    }
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
      {renderDeleteButton()}
      {/* <button>
      <Link to='editevent'>Edit </Link>
      </button> */}
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
  whenEventClicked: PropTypes.func,
  creator: PropTypes.bool
};

export default Event;