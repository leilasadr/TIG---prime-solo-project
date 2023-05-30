import React from "react";
import hierarchy from './hierarchy.jpg';
import { useSelector } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import './FeedbackPage.css';

function FeedbackPage(){

    const history = useHistory();

    const feedbacks = useSelector((store) => store.feedbacks);

    // console.log(hierarchy);

    const [colorValue, setColorValue] = useState(0);
    // console.log("Slider's value:", value);

    const [textValue, setTextValue] = useState('');
    // console.log('Text value:', textValue);

    const MAX = 6;

    const colorMap = {
        1: "#337909",
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
        history.push('/user');
    }
 
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

        <p>What color do you resonate with today?</p>

        <br />

        <input
        name="color_feedback"
        type="range"
        min="0"
        max={MAX}
        onChange={(event) => setColorValue(Number(event.target.value))}
        style={{backgroundSize: `${(colorValue * 100) / MAX}% 100%`, backgroundColor: colorHexCode}}
        value={colorValue}
        />

        <br />
        <br />

        <textarea
        name="text_feedback"
        rows="5"
        cols="30"
        placeholder="How are you feeling today?"
        value={textValue}
        onChange={(event) => setTextValue(event.target.value)}>
        </textarea>

        <br />
        <br />

        <button className="btn" onClick={handleFeedbackSubmit}>Submit</button>

      </div>
    )
};

export default FeedbackPage;