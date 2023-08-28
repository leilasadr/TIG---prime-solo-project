import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Slider, Box, Container } from '@mui/material';

import hierarchy from './hierarchy.jpg';
import PVI from './PVI.jpg';

import FeedbackText from './FeedbackText';

function FeedbackPage() {
  const feedbacks = useSelector((store) => store.feedbacks);
  const history = useHistory();
  const dispatch = useDispatch();

  const [textValue, setTextValue] = useState('');
  const [colorValue, setColorValue] = useState();

  const MAX = 6;

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

  const colorHexCode = getColorHexCode(colorValue);

  const handleFeedbackSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'SAGA/CREATE_FEEDBACK',
      payload: {
        colorFeedback: colorValue,
        textFeedback: textValue,
      },
    });
    setColorValue(0);
    setTextValue('');

    history.push('/user');
  };

  return (
    <Container>
       <p>
        As you get ready to reflect on where you are today, I invite you to get still, close your eyes, and focus your
        attention inward. What's the loudest sensation right this moment? Which color could it be? Where is it in the
        body?
        </p>

      <Box sx={{ width: 350, mt: 1 }}>
      <img src={hierarchy} alt="PVT hierarchy" height={500} width={400} />
      </Box>

      <Box sx={{ width: 350, mt: 1 }}>
      <img src={PVI} alt="PVI" height={500} width={400} />
      </Box>

      <p>Move the slider to any color/state that you resonate with today.</p>

      <Box sx={{ width: 350, mt: 1 }}>
        <Slider
          name="color_feedback"
          min={0}
          max={MAX}
          value={colorValue}
          onChange={(event, newValue) => setColorValue(newValue)}
          style={{
            backgroundImage: `linear-gradient(to right, ${colorHexCode} 0%, ${colorHexCode} ${(colorValue * 100) / MAX}%, transparent ${(colorValue * 100) / MAX}%, transparent 100%)`,
          }}
        />
      </Box>

      <Box mt={1}>
        <FeedbackText
          textValue={textValue}
          onTextChange={(event) => setTextValue(event.target.value)}
        />

        <Button onClick={handleFeedbackSubmit}>
          Submit
        </Button>
      </Box>
    </Container>
  );
}

export default FeedbackPage;
