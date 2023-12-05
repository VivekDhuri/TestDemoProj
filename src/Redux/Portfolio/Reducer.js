import {
  USER_HOLDING_API,
  USER_HOLDING_API_SUCCESS,
  USER_HOLDING_API_FAILURE,
  USER_TOTAL_INVESTMENT,
} from '../ActionConstants';

const initialState = {
  data: null,
  isLoading: false,
  error: null,
  totalInvestment: null,
};

const HoldingReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_HOLDING_API:
      return {
        ...state,
        isLoading: true,
      };
    case USER_HOLDING_API_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        data: action?.payload,
      };
    case USER_HOLDING_API_FAILURE:
      return {
        ...state,
        isLoading: false,
        data: null,
        totalInvestment: null,
        error: action?.payload,
      };
    case USER_TOTAL_INVESTMENT:
      return {
        ...state,
        isLoading: false,
        error: null,
        totalInvestment: action?.payload,
      };
    default:
      return state;
  }
};

export default HoldingReducer;
