import rootReducer from '../../reducers/index';
import selectedEventReducer from '../../reducers/selected-event-reducer';
import { createStore } from 'redux';

let store = createStore(rootReducer);

describe('rootReducer', () => {

  test('Check that initial state of selectedEventReducer matches root reducer', () => {
    expect(store.getState().selectedEvent).toEqual(selectedEventReducer(undefined, { type: null }))
  });

})
