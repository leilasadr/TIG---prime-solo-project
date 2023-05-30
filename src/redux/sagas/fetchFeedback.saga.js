import {put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchFeedback() {
    try{
        const feedback = yield axios.get('/api/feedback');
        console.log('Here are our feedback:', feedback.data);
        yield put({
            type: 'SET_FEEDBACK', payload: feedback.data
        })
    } catch{
        console.log('Error connecting to server, could not GET our feedback');
    }
}

function* sagaFetchFeedback() {
    yield takeLatest('SAGA/FETCH_THINGS', fetchFeedback);
}

export default sagaFetchFeedback;