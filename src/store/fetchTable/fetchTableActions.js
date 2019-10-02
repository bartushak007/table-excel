import { FETCH_TABLE, LOAD_TABLE } from './types';
import { resolvePath } from '../../helpers/index';

export const loadTable = loading => ({ type: LOAD_TABLE, loading });

export const fetchTable = () => dispatch => {
  fetch(resolvePath('index.json'))
    .then(j => j.json())
    .then(data => {
      dispatch({ type: FETCH_TABLE, tableData: data });
    });
};
