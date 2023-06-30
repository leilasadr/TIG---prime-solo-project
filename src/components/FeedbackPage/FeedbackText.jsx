import React from 'react';
import { TextField } from '@mui/material';

function FeedbackText({ textValue, onTextChange }) {
  return (
    <div>
      <p>How are you feeling today?</p>
      <TextField
        name="text_feedback"
        multiline
        rows={5}
        placeholder="How are you feeling today?"
        value={textValue}
        onChange={onTextChange}
        variant="outlined"
        fullWidth
      />
      <br />
      <br />
    </div>
  );
}

export default FeedbackText;
