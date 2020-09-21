import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
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
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;