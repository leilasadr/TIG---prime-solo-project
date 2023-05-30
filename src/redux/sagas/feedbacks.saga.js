import {put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchFeedbacks() {
    try{
        const feedbacks = yield axios.get('/api/feedbacks');
        console.log('Here are our feedbacks:', feedbacks.data);
        yield put({
            type: 'SET_FEEDBACKS', 
            payload: feedbacks.data
        })
    } catch (error){
        console.log('Error connecting to server, could not GET feedbacks', error);
    }
};

function* createFeedback(action) {
    try{
        const dbResponse = yield axios.post(
            '/api/feedbacks', 
            action.payload
        );
        yield put({
            type:'SAGA/FETCH_FEEDBACKS'
        })
    } catch (error) {
        console.log('createFeedback error', error);
    }
}

function* feedbacksSaga() {
    yield takeLatest('SAGA/FETCH_FEEDBACKS', fetchFeedbacks);
    yield takeLatest('SAGA/CREATE_FEEDBACK', createFeedback);
}

export default feedbacksSaga;