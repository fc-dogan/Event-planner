import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase';

function EditEventForm(props) {

  const firestore = useFirestore();
  const { selectedEvent } = props;

  function handleEditEventFormSubmission(event){
    event.preventDefault();
    const propertiesToUpdate = {
            title: event.target.title.value,
            location: event.target.location.value, 
            eventDate: event.target.eventDate.value,
            description: event.target.description.value,
          };
    return firestore.update({collection: 'events', doc: selectedEvent.id}, propertiesToUpdate);
  }
  return (
    <React.Fragment>
      <form onSubmit={handleEditEventFormSubmission}>
        <input
          type='text'
          name='title'
          placeholder='Event Title'
          defaultValue={selectedEvent.title} />
        <input
          type='text'
          name='location'
          placeholder='Location'
          defaultValue={selectedEvent.location} />
        <input 
        type='text'
        name='eventDate'
        placeholder='Event Date'
        defaultValue={selectedEvent.eventDate} />
        <textarea
          name='description'
          placeholder='Describe your event.' 
          defaultValue={selectedEvent.description}/>
        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  )
}

export default EditEventForm


// import React from 'react';
// import ReusableForm from './ReusableForm';
// import PropTypes from 'prop-types';
// import { useFirestore } from 'react-redux-firebase';
// import { connect } from 'react-redux';
// import { useHistory } from "react-router-dom";

// function EditEventForm(props) {
//   const history = useHistory();
//   const { selectedEvent, dispatch } = props;
//   const firestore = useFirestore();


//   function handleEditEventInFirestore(event){
//     event.preventDefault();
//     console.log('event edited');
//    
//     history.push('/editevent');
//     const action = {type: 'UPDATE_SELECTED', id: selectedEvent.id, ...propertiesToUpdate}
//     dispatch(action);
//     return firestore.update({collection: 'surveys', doc: selectedEvent.id}, propertiesToUpdate);
//   }
//   return (
//     <React.Fragment>
//       <form onSubmit={handleEditEventInFirestore}>
//         <input
//           type='text'
//           name='title'
//           placeholder='Event Title'
//           defaultValue={selectedEvent.title} />
//         <input
//           type='text'
//           name='location'
//           placeholder='Location'
//           defaultValue={selectedEvent.location} />
//         <input 
//         type='text'
//         name='eventDate'
//         placeholder='Event Date'
//         defaultValue={selectedEvent.eventDate} />
//         <textarea
//           name='description'
//           placeholder='Describe your event.' 
//           defaultValue={selectedEvent.description}/>
//         <button type='submit'>Submit</button>
//       </form>
//     </React.Fragment>
//   )
// }
// const mapStateToProps = state => {
//   return {
//     selectedEvent: state.selectedEvent
//   }
// }
// EditEventForm = connect(mapStateToProps)(EditEventForm);

// export default EditEventForm