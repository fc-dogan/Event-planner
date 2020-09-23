import React from 'react';
import firebase from "firebase/app";
import { useHistory } from 'react-router-dom';
// import { Button, Image, Modal } from 'semantic-ui-react';

function Signup() {
  let history = useHistory();

  function doSignUp(event){
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
      console.log("successfully signed up!");
      
      history.push('/signin');
    }).catch(function(error){
      console.log(error.message);
    })
  }

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={doSignUp}>
        <input
          type='text'
          name='email'
          placeholder='email' />
        <input
          type='password'
          name='password'
          placeholder='Password' />
        <button type='submit'>Sign up</button>
      </form>
    </div>
  )
}

export default Signup





