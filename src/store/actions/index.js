import axios from 'axios';
import {
  GET_ADDRESS_DATA,
  GET_ADDRESS_DATA_FAILURE,
  GET_ADDRESS_DATA_SUCCESS
} from './actionTypes';
// process.env.REACT_APP_AWS_URL
export const getAddressData = ip => dispatch => {
  dispatch({ type: GET_ADDRESS_DATA });
  axios
    .get(`${process.env.REACT_APP_AWS_URL}/${ip}`)
    .then(res => {
      dispatch({ type: GET_ADDRESS_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: GET_ADDRESS_DATA_FAILURE, payload: err });
    });
};
