import {put, takeEvery, call} from 'redux-saga/effects';
import {USER_HOLDING_API} from '../ActionConstants'; // Define your action types and action creators
import {fetchDataFromAPI} from '../ApiCall';
import {
  userHoldingApiSuccess,
  userHoldingApiFailure,
  userTotalInvestment,
} from './Actions';

const getProfitNLoss = data => {
  let totalProfitNLoss = 0;
  let totalCurrVal = 0;
  let totalInvestment = 0;

  const individualListData = data.map(item => {
    const currentVal = item.ltp * item.quantity;
    const investmentVal = item.avgPrice - item.quantity;
    const pnl = currentVal - investmentVal;
    totalProfitNLoss = totalProfitNLoss + pnl;
    totalCurrVal = totalCurrVal + currentVal;
    totalInvestment = totalInvestment + investmentVal;
    console.log('\n********', totalInvestment, currentVal);
    return {...item, currentVal, investmentVal, PNL: pnl};
  });

  return {
    individualListData,
    totalListData: {totalProfitNLoss, totalCurrVal, totalInvestment},
  };
};

function* PortfoliosSaga(action) {
  try {
    const data = yield call(
      fetchDataFromAPI,
      '4a76b093-b79d-49f5-9757-a709031c539d',
    );
    //Adding the  wholw api data to redux

    const listData = getProfitNLoss(data);

    yield put(userHoldingApiSuccess(listData?.individualListData));
    yield put(userTotalInvestment(listData?.totalListData));

    // const data = get;
    // yield put()
  } catch (error) {
    yield put(userHoldingApiFailure(error.message));
  }
}

function* PortfoliosSagaWatcher() {
  yield takeEvery(USER_HOLDING_API, PortfoliosSaga); // Watch for specific action type
}

export default PortfoliosSagaWatcher;
