import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

function EditEventForm(props) {

  function handleEditEventFormSubmission(event){
    event.preventDefault();
    console.log('event edited');
  }
  return (
    <React.Fragment>
    <ReusableForm 
      formSubmissionHandler={handleEditEventFormSubmission}
      buttonText="update Event!" />
  </React.Fragment>
  )
}

export default EditEventForm
