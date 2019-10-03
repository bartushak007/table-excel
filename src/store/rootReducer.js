import { combineReducers } from 'redux';
import tableReducer from './table/tableReducer';

export default combineReducers({
  table: tableReducer
});
