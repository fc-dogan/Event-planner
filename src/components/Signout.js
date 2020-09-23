import React from 'react';
import firebase from "firebase/app";
import { useHistory } from 'react-router-dom'

function Signout() {
  let history = useHistory();
  function doSignOut() {
    firebase.auth().signOut().then(function() {
      history.push('/');
      console.log("Successfully signed out!");
    }).catch(function(error) {
      console.log(error.message);
    });
  }
  return (
    <React.Fragment>
      <h1>Sign Out</h1>
      <button onClick={doSignOut}>Sign out</button>
    </React.Fragment>
  )
}

export default Signout;