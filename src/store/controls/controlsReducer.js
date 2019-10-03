import { SET_ADDRESS_LINE } from './types';

const controlsReducer = (store = { addressLine: '' }, action) => {
  switch (action.type) {
    case SET_ADDRESS_LINE:
      return { ...store, addressLine: action.addressLine };

    default:
      return store;
  }
};

export default controlsReducer;
