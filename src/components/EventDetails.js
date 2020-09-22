import React from 'react'
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';


function EventDetails(props) {
  const { selectedEvent, onClickingEdit } =props;
  return (
    <React.Fragment>
      <h1>Event Details</h1>
      <h3> {selectedEvent.title}</h3>
      <h3> {selectedEvent.location} </h3>
      <p>{selectedEvent.eventDate} </p>
      <p><em>{selectedEvent.description}</em></p>
      <button onClick={ onClickingEdit() }>
      <Link to='editevent'>Edit </Link>
     </button>
      {/* <button onClick={()=> onClickingDelete(ticket.id) }>Close Ticket</button>
      <hr/> */}
      {/* <button onClick={selectedEvent.onClickingEditIssue}>Edit Issue</button>
      <hr/> */}
    </React.Fragment>
    
  )
}

EventDetails.propTypes = {
  selectedEvent: PropTypes.object,
  onClickingEdit: PropTypes.func
};


export default EventDetails




//   
// 


