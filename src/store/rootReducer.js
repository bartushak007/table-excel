import { combineReducers } from 'redux';
import tableReducer from './table/tableReducer';
import controlsReducer from './controls/controlsReducer';

export default combineReducers({
  table: tableReducer,
  controls: controlsReducer
});
