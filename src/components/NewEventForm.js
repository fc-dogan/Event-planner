import React from 'react';
import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase'

function NewEventForm() {

  const firestore = useFirestore();

  function addEventToFirestore(event){
    event.preventDefault();

    return firestore.collection('events').add(
      {
        title: event.target.title.value,
        location: event.target.location.value, 
        eventDate: event.target.eventDate.value,
        description: event.target.description.value,
        timeOpen: firestore.FieldValue.serverTimestamp()
      }
    );
  }
  return (
    <React.Fragment>
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

export default NewEventForm;
