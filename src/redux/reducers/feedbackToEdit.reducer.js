const feedbackToEdit = (state={}, action) => {
    if (action.type === 'SET_FEEDBACK_TO_EDIT') {
        return action.payload;
    } else if (action.type === 'MODIFY_FEEDBACK_INFO') {
        return {...state, 
                colorFeedback: action.payload.colorFeedback, 
                textFeedback: action.payload.textFeedback}
    }
    return state;
}

export default feedbackToEdit;