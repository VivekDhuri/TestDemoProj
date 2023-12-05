import {all} from 'redux-saga/effects';
import PortfoliosSaga from './Portfolio/Sagas';

function* rootSaga() {
  yield all([PortfoliosSaga()]);
}

export default rootSaga;
