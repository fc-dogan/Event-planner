import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';
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
        timeOpen: firestore.FieldValue.serverTimestamp()
      }
    );
  }
  return (
    <React.Fragment>
    <ReusableForm 
      formSubmissionHandler={addEventToFirestore}
      buttonText="Add!" />
  </React.Fragment>
  )
}

export default NewEventForm
