import {
  USER_HOLDING_API,
  USER_HOLDING_API_FAILURE,
  USER_HOLDING_API_SUCCESS,
  USER_TOTAL_INVESTMENT,
} from '../ActionConstants';

export const callUserHoldingApi = payload => ({
  type: USER_HOLDING_API,
  payload: null,
});

export const userHoldingApiSuccess = payload => ({
  type: USER_HOLDING_API_SUCCESS,
  payload: payload,
});

export const userHoldingApiFailure = payload => ({
  type: USER_HOLDING_API_FAILURE,
  payload: payload,
});

export const userTotalInvestment = payload => ({
  type: USER_TOTAL_INVESTMENT,
  payload,
});
