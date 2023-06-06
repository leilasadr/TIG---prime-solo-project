import React from "react";

function FeedbackText({ textValue, onTextChange }) {
    return (
      <div>
        <textarea
          name="text_feedback"
          rows="5"
          cols="30"
          placeholder="How are you feeling today?"
          value={textValue}
          onChange={onTextChange}
        ></textarea>
        <br />
        <br />
      </div>
    );
  }

  export default FeedbackText;