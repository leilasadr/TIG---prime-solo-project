const feedbacks = (state=[], action) =>{
    switch (action.type){
        case 'SET_FEEDBACKS':
            return action.payload;
        default:
            return state
    }
};
export default feedbacks;