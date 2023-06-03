import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import { useHistory } from 'react-router-dom';

function UserPage() {

  const history = useHistory();
  const dispatch = useDispatch();

  // renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  // renders some feedback reducer info to the DOM
  const feedbacks = useSelector((store) => store.feedbacks);
  // console.log('feedback from the store:', feedback);

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

  const editFeedback = (feedback) => {
    // console.log('the feedback id is:', feedback.id);
    history.push(`/feedbacks/edit/${feedback.id}`);
  }

  const colorMap = {
    0: '#337909',
    1: '#71a61e',
    2: '#afd232',
    3: '#eeeb3f',
    4: '#d79645',
    5: '#d77048',
    6: '#d6074f',
  };

  const getColorHexCode = (colorId) => {
    return colorMap[colorId];
  };

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Safety is the treatement.
        <br />
        Dr. Stephen Porges</p>

      <br />
      <br />

      <ul>
        {feedbacks.map(feedback => {
          return (
            <span key={feedback.id}> 

              <div className="feedbackEntry" style={{backgroundColor: getColorHexCode(feedback.color_feedback)}}> 
                <p>
                  {feedback.text_feedback} on {new Date(feedback.date).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: '2-digit' })}
                </p>
              </div>

              <button className="btn" onClick={() => editFeedback(feedback)}>Edit</button>
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
