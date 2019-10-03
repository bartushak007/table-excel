import {
  FETCH_TABLE,
  LOAD_TABLE,
  CHANGE_TABLE_ELEM,
  SET_CURRENT
} from './types';

const tableReducer = (store = { values: {}, loading: false }, action) => {
  switch (action.type) {
    case FETCH_TABLE:
      return { ...store, ...action.tableData };

    case LOAD_TABLE:
      return { ...store, loading: action.loading };

    case CHANGE_TABLE_ELEM:
      return {
        ...store,
        values: {
          ...store.values,
          [action.name]: { ...store.values[action.name], value: action.value }
        }
      };

    case SET_CURRENT:
      return {
        ...store,
        current: action.current
      };

    default:
      return store;
  }
};

export default tableReducer;