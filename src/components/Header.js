import React from 'react';
import { NavLink } from 'react-router-dom';

 function Header() {
  return (
      <nav>
        {/* <h1>Event Planner</h1> */}
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/signin'>Sign In</NavLink>
          </li>
          <li>
            <NavLink to='/signout'>Sign Out</NavLink>
          </li>
        </ul>
      </nav>
  )
}

export default Header;