import {combineReducers} from 'redux';
import cluesReducer from './clues_reducer';

const rootReducer = combineReducers({
  clues: cluesReducer,
})

export default rootReducer
