import React from 'react'
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';
import { Link } from 'react-router-dom';


function EventDetails(props) {
 const { selectedEvent, onClickingEdit, currentUser } = props;
  // const firestore = useFirestore();
  
  // const handleDeletingEvent =() =>{
  //   return firestore.delete({collection: 'events', doc: props.id });
  // }

  // const renderDeleteButton = () =>{
  //   if(currentUser !== null) {
  //     return ( 
  //       <button onClick={handleDeletingEvent}>Delete</button>
  //     )
  //   }
  //   else{
  //     return "null";
  //   }
  // }
 
  return (
    <React.Fragment>
      <h1>Event Details</h1>
      <h3> {selectedEvent.title}</h3>
      <h3> {selectedEvent.location} </h3>
      <p>{selectedEvent.eventDate} </p>
      <p><em>{selectedEvent.description}</em></p>
      <button onClick={ onClickingEdit }>
      Edit
     </button>
      {/* {renderDeleteButton()} */}
      {/* <button onClick={()=> onClickingDelete(ticket.id) }>Close Ticket</button>
      <hr/> */}
      {/* <button onClick={selectedEvent.onClickingEditIssue}>Edit Issue</button>
      <hr/> */}
    </React.Fragment>
    
  )
}

EventDetails.propTypes = {
  selectedEvent: PropTypes.object,
  onClickingEdit: PropTypes.func,
  currentUser: PropTypes.object
};


export default EventDetails


