import {
  FETCH_TABLE,
  LOAD_TABLE,
  CHANGE_TABLE_ELEM,
  SET_CURRENT
} from './types';
import { resolvePath } from '../../helpers/index';

export const loadTable = loading => ({ type: LOAD_TABLE, loading });

export const fetchTable = () => dispatch => {
  fetch(resolvePath('index.json'))
    .then(j => j.json())
    .then(data => {
      dispatch({ type: FETCH_TABLE, tableData: data });
    });
};

export const changeTableElemValue = ({ target: { name, value } }) => {
  return {
    type: CHANGE_TABLE_ELEM,
    name,
    value
  };
};

export const setCurrentTableElement = current => ({
  type: SET_CURRENT,
  current
});
