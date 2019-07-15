import {
  GET_ADDRESS_DATA,
  GET_ADDRESS_DATA_FAILURE,
  GET_ADDRESS_DATA_SUCCESS
} from '../actions/actionTypes';

const initalState = {
  isFetching: false,
  addressData: null,
  error: null
};

export const ipAddressReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_ADDRESS_DATA:
      return {
        ...state,
        isFetching: true
      };
    case GET_ADDRESS_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
        addressData: null
      };
    case GET_ADDRESS_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        addressData: { ...action.payload }
      };
    default:
      return {
        ...state
      };
  }
};
