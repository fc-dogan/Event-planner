import React from 'react'
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';
import { Link } from 'react-router-dom';


function EventDetails(props) {
 const { selectedEvent, onClickingEdit } = props;
 
  return (
    <div className="container section event-detail">
      <h3>Event Details</h3>
      <div className="card z-depth-o">
        <div className="card-content">
          <span className="card-title">{selectedEvent.title}</span>
          <div className="card-action grey lighten-4 grey-text">
            <p> {selectedEvent.location} </p>
            <p>{selectedEvent.eventDate} </p>
            <p><em>{selectedEvent.description}</em></p>
          </div>
          <button onClick={ onClickingEdit } className='btn grey lighten-1 z-depth-0'>
          Edit
        </button>
        </div>
      </div>
    </div>
       
  )
}

EventDetails.propTypes = {
  selectedEvent: PropTypes.object,
  onClickingEdit: PropTypes.func,
  currentUser: PropTypes.object
};


export default EventDetails


