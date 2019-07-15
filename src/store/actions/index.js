import axios from 'axios';
import {
  GET_ADDRESS_DATA,
  GET_ADDRESS_DATA_FAILURE,
  GET_ADDRESS_DATA_SUCCESS
} from './actionTypes';

export const getAddressData = () => dispatch => {
  dispatch({ type: GET_ADDRESS_DATA });
  axios
    .get(process.env.REACT_APP_AWS_URL)
    .then(res => {
      dispatch({ type: GET_ADDRESS_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_ADDRESS_DATA_FAILURE, payload: err });
    });
};
