import { all } from 'redux-saga/effects';
// import { takeEvery} from 'redux-saga/effects';

//Imported sagas
import getToDosSaga from './getToDos.saga';

//Watcher saga
function* rootSaga() {
    console.log(`I'm in the watcher saga`)
    yield all(
        [

            getToDosSaga(),
        ]
    );
}

export default rootSaga;
