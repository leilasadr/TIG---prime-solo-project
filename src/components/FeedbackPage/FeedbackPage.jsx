import React from "react";
import hierarchy from './hierarchy.jpg';
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";


import FeedbackColor from "./FeedbackColor";
import FeedbackText from "./FeedbackText";

import './FeedbackColor.css'

function FeedbackPage() {

  const feedbacks = useSelector((store) => store.feedbacks);

  const history = useHistory();
  const dispatch = useDispatch();

  const [textValue, setTextValue] = useState('');

  const [colorValue, setColorValue] = useState(0);
  
  // The slider's color logic
    const MAX = 6;

    const colorMap = {
        0: "#337909", 
        1: "#71a61e",
        2: "#afd232",
        3: "#eeeb3f",
        4: "#d79645",
        5: "#d77048",
        6: "#d6074f",
      };

    const getBackgroundSize = () => {
	return {
		backgroundSize: `${(colorValue * 100) / MAX}% 100%`
	};
    };

    const getColorHexCode = (colorId) => {
        return colorMap[colorId];
    };

    const colorHexCode = getColorHexCode(colorValue);

    const handleFeedbackSubmit = (event) => {
      event.preventDefault();
      dispatch({
        type: 'SAGA/CREATE_FEEDBACK',
        payload: {
          colorFeedback: colorValue,
          textFeedback: textValue
        }
      });
      setColorValue(0);
      setTextValue('');
  
      history.push('/user');
    }

  // console.log(hierarchy);

  return (
    <div className="container">
      <p>
        As you get ready to reflect on where you are today, 
        I invite you to get still, close your eyes, and focus your attention inward.
        What's the loudest sensation right this moment? Which color could it be? Where is it in the body? 
      </p>

      <img src={hierarchy} alt="PVT hierarchy" height={500} width={400} />

      <br />
      <br />

      <p>Move the slider to any color/state that you resonate with today.</p>
      <br />

      <div>
        <input
            name="color_feedback"
            type="range"
            min="0"
            max={MAX}
            onChange={(event) => setColorValue(Number(event.target.value))}
            style={{backgroundSize: getBackgroundSize(), backgroundColor: colorHexCode}}
            value={colorValue}
        />
      </div>

      <br />
      <br />

      <div>
      <textarea
        name="text_feedback"
        rows="5"
        cols="30"
        placeholder="How are you feeling today?"
        value={textValue}
        onChange={(event) => setTextValue(event.target.value)}
      ></textarea>

      <br />
      <br />

      <button className="btn" onClick={handleFeedbackSubmit}>
        Submit
      </button>

      </div>

      

    

    </div>
    
  )
};

export default FeedbackPage;