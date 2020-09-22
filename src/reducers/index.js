import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import selectedEventReducer from './selected-event-reducer';

const rootReducer = combineReducers({
  firestore: firestoreReducer,
  selectedEvent: selectedEventReducer
});

export default rootReducer;