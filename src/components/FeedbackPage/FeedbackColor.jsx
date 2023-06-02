import React from "react";
import { useState } from "react";

import './FeedbackColor.css';

function FeedbackColor() {

    const [colorValue, setColorValue] = useState(0);
    // console.log("Slider's value:", value);

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

    return(
    <div className="container">
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
)

}
export default FeedbackColor;