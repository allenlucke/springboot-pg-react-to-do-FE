import { combineReducers } from 'redux';
// Reducers
import getToDosReducer from './getToDos.reducer';
// combineReducers
const rootReducer = combineReducers({
    getToDosReducer,
})
export default rootReducer;