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
        <div className="card z-depth-0 event">
        <span className="card-title ">{props.title}</span>
        <div className="card-action grey lighten-4 grey-text">
          <p>Location: {props.location} </p>
          <p>Date: {props.eventDate} </p>
          <p>Description: <em>{props.description}</em></p>
        </div>
          {renderDeleteButton()}
        </div>
      </div>
        
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

{/* <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{project.title}</span>
        <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
        <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
      </div>
    </div> */}