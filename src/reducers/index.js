import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import selectedEventReducer from './selected-event-reducer';
import editingEventReducer from './editing-event-reducer';

const rootReducer = combineReducers({
  firestore: firestoreReducer,
  selectedEvent: selectedEventReducer,
  editingEvent: editingEventReducer,
  firebase: firebaseReducer
});

export default rootReducer;