import selecetEventReducer from '../../reducers/selected-event-reducer';
let action;
const currentState = {
  1:{
  title: "first event",
  location: "Portland",
  eventDate: "Sept 23",
  description: "meet up",
  id: 1
  }
};

describe('selectEventReducer', () => {
  test('Should return default state if no action type ispassed to the reducer', () =>{
    expect(selecetEventReducer('', {type:null})).toEqual('');
  });
  test('Should successfully set selected event', () =>{
   action = {
      type: 'UPDATE_SELECTED',
      title: "first event",
      location: "Portland",
      eventDate: "Sept 23",
      description: "meet up",
      id: 1
    };

    expect(selecetEventReducer(currentState, action)).toEqual({
      title: "first event",
      location: "Portland",
      eventDate: "Sept 23",
      description: "meet up",
      id:1
    })
  })
})
