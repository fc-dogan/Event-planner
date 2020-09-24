import React from 'react';
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase'

function NewEventForm(props) {

  const firestore = useFirestore();

  function addEventToFirestore(event){
    event.preventDefault();

    return firestore.collection('events').add(
      {
        title: event.target.title.value,
        location: event.target.location.value, 
        eventDate: event.target.eventDate.value,
        description: event.target.description.value,
        creator: props.creatorOfEvent,
        timeOpen: firestore.FieldValue.serverTimestamp()
      }
    );
  }
  return (
    <React.Fragment>
      <h2>Create a new event</h2>
      <form onSubmit={addEventToFirestore}>
        <input
          type='text'
          name='title'
          placeholder='Event Title' />
        <input
          type='text'
          name='location'
          placeholder='Location' />
        <input 
        type='text'
        name='eventDate'
        placeholder='Event Date' />
        <textarea
          name='description'
          placeholder='Describe your event.' />
        <button type='submit'>Add</button>
      </form>
  </React.Fragment>
  )
}

NewEventForm.prototype ={
  creatorOfEvent: PropTypes.string
}

export default NewEventForm;
