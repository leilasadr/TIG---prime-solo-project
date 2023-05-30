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
    } catch{
        console.log('Error connecting to server, could not GET feedbacks');
    }
}

function* sagaFetchFeedbacks() {
    yield takeLatest('SAGA/FETCH_FEEDBACKS', fetchFeedbacks);
}

export default sagaFetchFeedbacks;