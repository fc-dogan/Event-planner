export default (state='', action) => {
  const { title, location, eventDate, description, id } = action;
  switch(action.type) {
    case 'UPDATE_SELECTED':
      const newSelected = { title, location, eventDate, description, id };
      return  newSelected;
    default :
    return state;
  }
}