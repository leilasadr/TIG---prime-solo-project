import React from 'react';
// import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Safety is the treatement.</p>
      <p>Dr. Stephen Porges</p>
      <p>This is where the user will see all their feedback entries.</p>
      {/* <p>Your ID is: {user.id}</p> */}
      {/* <LogOutButton className="btn" /> */}
      <br />
      <br />
      
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
