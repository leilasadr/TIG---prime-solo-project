import React from 'react';
import { Card, CardContent, Button, ButtonGroup} from '@mui/material';


function FeedbackCard({ feedback, onDelete, onEdit }) {
  const colorMap = {
    0: '#337909',
    1: '#71a61e',
    2: '#afd232',
    3: '#eeeb3f',
    4: '#d79645',
    5: '#d77048',
    6: '#d6074f',
  };

  const backgroundColor = colorMap[feedback.color_feedback];
  const textColor = backgroundColor === '#337909' || backgroundColor === '#d6074f' ? '#ffffff' : '#000000';

  return (
    <Card className="feedbackEntry" style={{ backgroundColor }}>
      <CardContent>
        <p style={{ color: textColor }}>
          {feedback.text_feedback} on {new Date(feedback.date).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: '2-digit' })}
        </p>
        <ButtonGroup>
        <Button onClick={() => onEdit(feedback)} sx={{
              '&:hover': {
                backgroundColor: 'antiquewhite',
              },
            }} >Edit</Button>
        <Button onClick={() => onDelete(feedback.id)} sx={{
              '&:hover': {
                backgroundColor: 'antiquewhite',
              },
            }} >Delete</Button>
        </ButtonGroup>

      </CardContent>
    </Card>
  );
}

export default FeedbackCard;