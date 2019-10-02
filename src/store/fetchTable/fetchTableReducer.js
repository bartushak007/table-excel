import { FETCH_TABLE, LOAD_TABLE } from './types';

const fetchTableReducer = (store = { values: {}, loading: false }, action) => {
  switch (action.type) {
    case FETCH_TABLE:
      return { ...store, ...action.tableData };

    case LOAD_TABLE:
      return { ...store, loading: action.loading };

    default:
      return store;
  }
};

export default fetchTableReducer;
