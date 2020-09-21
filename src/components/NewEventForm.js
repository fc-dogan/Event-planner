import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

function NewEventForm(props) {

  function addEvent(event){
    event.preventDefault();
    console.log('event added');
  }
  return (
    <React.Fragment>
    <ReusableForm 
      formSubmissionHandler={addEvent}
      buttonText="Add!" />
  </React.Fragment>
  )
}

export default NewEventForm
