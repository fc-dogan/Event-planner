import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

function NewEventForm(event) {

  return (
    <React.Fragment>
    <ReusableForm 
      // formSubmissionHandler={addTicketToFirestore}
      buttonText="Add!" />
  </React.Fragment>
  )
}

export default NewEventForm
