import { combineReducers } from 'redux';
import fetchTableReducer from './fetchTable/fetchTableReducer';

export default combineReducers({
  table: fetchTableReducer
});
