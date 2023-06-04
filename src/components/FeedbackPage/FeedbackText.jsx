// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";

// import FeedbackColor from "./FeedbackColor";

// function FeedbackText() {
//   const history = useHistory();
//   const dispatch = useDispatch();

//   const [colorValue, setColorValue] = useState(0);
//   const [textValue, setTextValue] = useState('');

//   const handleFeedbackSubmit = (event) => {
//     event.preventDefault();
//     dispatch({
//       type: 'SAGA/CREATE_FEEDBACK',
//       payload: {
//         colorFeedback: colorValue,
//         textFeedback: textValue
//       }
//     });
//     setColorValue(0);
//     setTextValue('');

//     history.push('/user');
//   }

//   return (
//     <div className="container">
//       <FeedbackColor feedback={feedback}/>
//       <textarea
//         name="text_feedback"
//         rows="5"
//         cols="30"
//         placeholder="How are you feeling today?"
//         value={textValue}
//         onChange={(event) => setTextValue(event.target.value)}
//       ></textarea>

//       <br />
//       <br />

//       <button className="btn" onClick={handleFeedbackSubmit}>
//         Submit
//       </button>
//     </div>
//   );
// }

// export default FeedbackText;