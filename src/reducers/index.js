import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import selectedEventReducer from './selected-event-reducer';
import editingEventReducer from './editing-event-reducer';

const rootReducer = combineReducers({
  firestore: firestoreReducer,
  selectedEvent: selectedEventReducer,
  editingEvent: editingEventReducer
});

export default rootReducer;