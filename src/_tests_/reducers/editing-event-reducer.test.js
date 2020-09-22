import editingEventReducer from "../../reducers/editing-event-reducer";

describe('editingEventReducer', () => {
  test('Should return default state if no action type is recognized', () => {
    expect(editingEventReducer(false, { type: null })).toEqual(false)
  });
  test('Should toggle editing state to true', () => {
    expect(editingEventReducer(false, { type:'EDITING_EVENT' })).toEqual(true);
  });
})