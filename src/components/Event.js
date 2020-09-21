import React from "react";
import PropTypes from "prop-types";

function Event(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenEventClicked(props.id)}>
        <h3> {props.title}</h3>
        <h3> {props.location} </h3>
        <p>{props.eventDate} </p>
        <p><em>{props.description}</em></p>
        <p><em>{props.formattedWaitTime}</em></p>
      </div>
      <hr/>
    </React.Fragment>
  );
}

Event.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string,
  eventDate: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  formattedWaitTime: PropTypes.string,
  whenEventClicked: PropTypes.func
};

export default Event;