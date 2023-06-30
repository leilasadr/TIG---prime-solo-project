import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import { useHistory } from 'react-router-dom';

import FeedbackCard from './FeedbackCard.jsx'
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

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

  // alert to warn the user before deleting an entry
  const showDeleteConfirmation = (feedbackId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You are about to delete this feedback. This action cannot be undone.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#75cfcf',
      cancelButtonColor: '#cb75cf',
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        // If the user confirms the deletion, call the deleteFeedback function
        deleteFeedback(feedbackId);
      }
    });
  };
  

  const editFeedback = (feedback) => {
    // console.log('the feedback id is:', feedback.id);
    history.push(`/feedbacks/edit/${feedback.id}`);
  }
  
  const sortedFeedbacks = feedbacks.sort((a, b) => b.id - a.id);

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Safety is the treatement.
        <br />
        Dr. Stephen Porges</p>

      <br />
      <br />

      <ul>
        {sortedFeedbacks.map((feedback) => (
          <FeedbackCard
            key={feedback.id}
            feedback={feedback}
            onDelete={showDeleteConfirmation}
            onEdit={editFeedback}
          />
        ))}
      </ul>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
