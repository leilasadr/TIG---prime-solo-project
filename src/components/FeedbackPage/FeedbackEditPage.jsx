import {useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { useState } from 'react';

import './FeedbackEditPage.css'

function FeedbackEditPage() {

    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const feedbackToEdit = useSelector(store => store.feedbackToEdit);

    useEffect(() => {
      const idToEdit = params.id;
    //   console.log('idToEdit:', idToEdit);
      dispatch({
        type: 'SAGA/FETCH_FEEDBACK_TO_EDIT',
        payload: idToEdit
      })
    }, [])

    const handleUserColorChange = (event) => {
        dispatch({
            type: 'MODIFY_COLOR',
            payload: Number(event.target.value)
        })
    }

    const handleUserTextChange = (event) => {
        dispatch({
            type: 'MODIFY_TEXT',
            payload: event.target.value
        })
    }

    const finalizeFeedbackEdit = (event) => {
        event.preventDefault();

        dispatch({
            type: 'SAGA/FINALIZE_FEEDBACK_EDIT',
            payload: feedbackToEdit
        })
        history.push('/user');
    }
    // The slider's color logic
    const [colorValue, setColorValue] = useState(feedbackToEdit.color_feedback);

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

    return (
        <form onSubmit={finalizeFeedbackEdit}>

            <input
            name="color_feedback"
             type='range'
             min="0"
            max={MAX}
             value={feedbackToEdit.color_feedback}
             onChange={handleUserColorChange}
             style={{backgroundSize: getBackgroundSize(), backgroundColor: colorHexCode}}
            />

            <br />
            <br />

            <textarea
            name="text_feedback"
            rows="5"
            cols="30"
            value={feedbackToEdit.text_feedback}
            onChange={handleUserTextChange}
            >
            </textarea>

            <br />
            <br />

            <button className="btn" type="submit">Finalize Edit</button>

        </form>
    )
}

export default FeedbackEditPage;