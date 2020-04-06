import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getToDos(action) {
    console.log('In getToDos');
    
    try {
        const response = yield axios({
            method: 'GET',
            url: 'http://localhost:8080/api/v1/to-do-list'
        })
        yield put({
            type: 'SET_TODOS',
            payload: response.data
        });
    } catch(err) {
        console.log('Error fetching ToDos', err);
    }
}
function* getToDosSaga() {
    yield takeLatest('GET_TODOS', getToDos);
}

export default getToDosSaga;