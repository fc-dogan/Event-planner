export default (state=null, action) => {
  const { title, location, eventDate, description, id } = action;
  switch(action.type) {
    case 'UPDATE_SELECTED':
      const newSelected = { title, location, eventDate, description, id };
      return  newSelected;
    case 'UNSELECT_EVENT':
      return  null;
    default :
    return state;
  }
}