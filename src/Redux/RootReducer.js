import {combineReducers} from 'redux';
import HoldingReducer from './Portfolio/Reducer';

const rootReducer = combineReducers({
  Holdings: HoldingReducer,
});

export default rootReducer;
