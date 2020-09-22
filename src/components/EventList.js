import React from 'react';
import Event from './Event';
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { Link } from 'react-router-dom'
function EventList(props) {

  useFirestoreConnect([
    { collection: 'events' }
  ]);

  const events = useSelector(state => state.firestore.ordered.events);

  if (isLoaded(events)) {
    return (
      <React.Fragment>
        {events.map((event) => {
          return <Event
            whenEventClicked= {props.onEventSelection }
            title={event.title}
            location={event.location}
            eventDate= {event.eventDate}
            description={event.description}
            formattedWaitTime={event.formattedWaitTime}
            id={event.id}
            key={event.id}
            />
        })}
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}
    
{/* <Link to={'/event/' + event.id} key={event.id}> </Link */}


//   return (
//     <div className='event-list'>
//       <p>Event List</p>
//       <div className="card z-depth-0">
//         <span className="card-title">Event Title</span>
//         <p>event details</p>
//       </div>
//     </div>
//   )
// }

EventList.propTypes = {
  onEventSelection: PropTypes.func
};

export default EventList;
