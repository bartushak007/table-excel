import { SET_ADDRESS_LINE, SET_CURRENT_FORMULA } from './types';

export const setCurrentFormula = formula => {
  return {
    formula,
    type: SET_CURRENT_FORMULA
  };
};

export const setAddressLine = addressLine => dispatch => {
  addressLine === '=sum' && dispatch(setCurrentFormula(addressLine));
  dispatch({
    type: SET_ADDRESS_LINE,
    addressLine
  });
};
