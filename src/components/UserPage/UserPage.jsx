import React from 'react';
// import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import { useHistory } from 'react-router-dom';

function UserPage() {

  const history = useHistory();

  // renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  // renders some feedback reducer info to the DOM
  const feedbacks = useSelector((store) => store.feedbacks);
  // console.log('feedback from the store:', feedback);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchFeedbacks();
  }, [])

  const fetchFeedbacks = () => {
    dispatch({
      type:'SAGA/FETCH_FEEDBACKS'
    })
    // console.log('Updated feedbacks state:', feedbacks);
  }

  const deleteFeedback = (id) => {
    dispatch({
      type: 'SAGA/DELETE_FEEDBACK',
      payload: id
    })
  }

  const editFeedback = () => {
    history.push()
  }


  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Safety is the treatement.
        <br />
        Dr. Stephen Porges</p>

      {/* <p>Your ID is: {user.id}</p> */}
      {/* <LogOutButton className="btn" /> */}
      <br />
      <br />
      <ul>
        {feedbacks.map(feedback => {
          return (
            <span key={feedback.id}> 
              <p>
                {feedback.text_feedback} on {new Date(feedback.date).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: '2-digit' })}
              </p>
              <button className="btn" onClick={editFeedback}>Edit</button>
              <button className="btn" onClick={() => deleteFeedback(feedback.id)}>Delete</button>
            </span>
          )
        })}
      </ul>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
