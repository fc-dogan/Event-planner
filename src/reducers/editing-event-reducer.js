export default (state = false, action) => {
  switch (action.type){
    case 'EDITING_EVENT' :
      return !state;
    default:
      return state;
  }
}