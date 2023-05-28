import React from "react";
import hierarchy from './hierarchy.jpg';
import { useSelector } from "react-redux";
import { useState } from "react";
import './FeedbackPage.css';

function FeedbackPage(){
    // console.log(hierarchy);
    const [value, setValue] = useState(0);
    const MAX = 10;
    const getBackgroundSize = () => {
	return {
		backgroundSize: `${(value * 100) / MAX}% 100%`,
	};
    };

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
        onChange={(e) => setValue(e.target.value)}
        style={getBackgroundSize()}
        value={value}
        />

        <br />
        <br />

        <textarea
        name="text_feedback"
        rows="5"
        cols="30"
        placeholder="How are you feeling today?">
        </textarea>

        <br />
        <br />

        <button>Submit</button>

      </div>
    )
};

export default FeedbackPage;