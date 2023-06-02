const feedbackToEdit = (state={}, action) => {
    if (action.type === 'SET_FEEDBACK_TO_EDIT') {
        console.log('Here is action.payload from feedbackToEdit reducer:', action.payload);
        return action.payload;
    } else if (action.type === 'MODIFY_COLOR') {
        return {...state, color_feedback: action.payload}
    } else if (action.type === 'MODIFY_TEXT') {
        return {...state, text_feedback: action.payload}
    }
    return state;
}

export default feedbackToEdit;