import {
  GET_ADDRESS_DATA,
  GET_ADDRESS_DATA_FAILURE,
  GET_ADDRESS_DATA_SUCCESS
} from '../actions/actionTypes';

const initalState = {
  isFetching: false,
  addressData: [],
  error: null
};

export const ipAddressReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_ADDRESS_DATA:
      return {
        isFetching: true,
        ...state
      };
    case GET_ADDRESS_DATA_FAILURE:
      return {
        isFetching: false,
        error: action.payload,
        addressData: [],
        ...state
      };
    case GET_ADDRESS_DATA_SUCCESS:
      return {
        isFetching: false,
        addressData: [...action.payload],
        ...state
      };
    default:
      return {
        ...state
      };
  }
};
