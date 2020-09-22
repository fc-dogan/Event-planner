import rootReducer from '../../reducers/index';
import selectedEventReducer from '../../reducers/selected-event-reducer';
import { createStore } from 'redux';

let store = createStore(rootReducer);

describe('rootReducer', () => {

  test('Check that initial state of selectedEventReducer matches root reducer', () => {
    expect(store.getState().selectedEvent).toEqual(selectedEventReducer(undefined, { type: null }))
  });

  test('Check that the result of root reducer equal the result of the selectedEvent reducer', () => {
      const action = {
        type: 'SELECTED_EVENT',
        title: "first event",
        location: "Portland",
        eventDate: "Sept 23",
        description: "meet up",
        id:1
      };
    store.dispatch(action);
    expect(store.getState().selectedEvent).toEqual(selectedEventReducer(undefined, action))
  })
})
