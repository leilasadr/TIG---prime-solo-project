import {useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import hierarchy from '../hierarchy.jpg';


import { Button, ButtonGroup, Slider, Box, Container } from '@mui/material';

import FeedbackText from '../FeedbackText';

import './FeedbackEditPage.css'

function FeedbackEditPage() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const feedbackToEdit = useSelector(store => store.feedbackToEdit);

    const [colorValue, setColorValue] = useState(feedbackToEdit.color_feedback);
    const [textValue, setTextValue] = useState(feedbackToEdit.text_feedback);

    useEffect(() => {
      // const idToEdit = params.id;
    //   console.log('idToEdit:', idToEdit);
      dispatch({
        type: 'SAGA/FETCH_FEEDBACK_TO_EDIT',
        payload: id
      })
    }, [])

    useEffect(() => {
      setColorValue(feedbackToEdit.color_feedback);
    }, [feedbackToEdit]);

    // const handleUserColorChange = (event) => {
    //     dispatch({
    //         type: 'MODIFY_COLOR',
    //         payload: Number(event.target.value)
    //     })
    // }

    const handleUserTextChange = (event) => {
        dispatch({
            type: 'MODIFY_TEXT',
            payload: event.target.value
        })
        setTextValue(event.target.value);
    }

    const finalizeFeedbackEdit = (event) => {
        event.preventDefault();

        dispatch({
            type: 'SAGA/FINALIZE_FEEDBACK_EDIT',
            payload: {
              id,
              color_feedback: colorValue,
              text_feedback: textValue
            },
        })
        history.push('/user');
    }

    const handleCancel = () => {
        history.push('/user');
      };

    // The slider's color logic
    const getColorHexCode  = (colorId) => {
      const colorMap = {
            0: "#337909", 
            1: "#71a61e",
            2: "#afd232",
            3: "#eeeb3f",
            4: "#d79645",
            5: "#d77048",
            6: "#d6074f",
          };
      return colorMap[colorId];
    };

    const getBackgroundStyle = () => {
      const MAX = 6;
      const colorHexCode = getColorHexCode(colorValue);
      const colorPercentage = (colorValue * 100) / MAX;

      return {
        backgroundImage: `linear-gradient(to right, ${colorHexCode} 0%, ${colorHexCode} ${colorPercentage}%, transparent ${colorPercentage}%, transparent 100%)`
      }
    }

    // const MAX = 6;

    // const colorMap = {
    //     0: "#337909", 
    //     1: "#71a61e",
    //     2: "#afd232",
    //     3: "#eeeb3f",
    //     4: "#d79645",
    //     5: "#d77048",
    //     6: "#d6074f",
    //   };

    //   const getBackgroundStyle = () => {
    //     const colorPercentage = (colorValue * 100) / MAX;
    //     const colorHexCode = colorMap[colorValue];
    //     return {
    //       backgroundImage: `linear-gradient(to right, ${colorHexCode} 0%, ${colorHexCode} ${colorPercentage}%, transparent ${colorPercentage}%, transparent 100%)`
    //     };
    //   };

    return (
        <Container className="editForm">

        <p>
        As you get ready to reflect on where you are today, I invite you to get still, close your eyes, and focus your
        attention inward. What's the loudest sensation right this moment? Which color could it be? Where is it in the
        body?
        </p>

        <Box sx={{ width: 350, mt: 1 }}>
        <img src={hierarchy} alt="PVT hierarchy" height={500} width={400} />
        </Box>

        <p>Move the slider to any color/state that you resonate with today.</p>
            
        <Box sx={{ width: 350, mt: 1 }}>
        <Slider
        name="color_feedback"
        min={0}
        max={6}
        value={colorValue}
        onChange={(event, newValue) => setColorValue(newValue)}
        style={getBackgroundStyle()} />
        </Box>

        <br />
        <br />

        <Box mt={1}>
        <FeedbackText
        textValue={feedbackToEdit.text_feedback}
        onTextChange={handleUserTextChange}
        />
        </Box>

        
        <ButtonGroup>
        <Button onClick={finalizeFeedbackEdit}>Finalize Edit</Button>
        <Button onClick={handleCancel}>Cancel</Button>
        </ButtonGroup>
        </Container>
    )
}

export default FeedbackEditPage;