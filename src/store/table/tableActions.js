import {
  FETCH_TABLE,
  LOAD_TABLE,
  CHANGE_TABLE_ELEM,
  SET_CURRENT,
  CHANGE_CURRENCY
} from './types';
import { resolvePath } from '../../helpers/index';
import { regexUrl } from '../../helpers';

export const loadTable = loading => ({ type: LOAD_TABLE, loading });

export const fetchTable = () => dispatch => {
  fetch(resolvePath('index.json'))
    .then(j => j.json())
    .then(data => {
      dispatch({ type: FETCH_TABLE, tableData: data });
    });
};

export const changeTableElemValue = (name, value) => {
  return {
    type: CHANGE_TABLE_ELEM,
    name,
    value,
    valueType: regexUrl.test(value) ? 'url' : +value * 1 ? 'number' : 'string'
  };
};

export const changeTableElemValueCurrency = (name, currency) => ({
  type: CHANGE_CURRENCY,
  name,
  currency
});

export const handleChangeTableElement = ({ target: { name, value } }) => {
  return changeTableElemValue(name, value);
};

export const setCurrentTableElement = name => (dispatch, store) => {
  (!store().controls.addressLine || !store().table.current) &&
    dispatch({
      type: SET_CURRENT,
      current: name
    });
};

export const doJobWithFormula = (value, name, valueType) => (
  dispatch,
  store
) => {
  const {
    table: { current, values },
    controls: { addressLine }
  } = store();

  if (current && current !== name) {
    addressLine.startsWith('=sum') &&
      valueType === 'number' &&
      dispatch(
        changeTableElemValue(
          current,
          +(values[current] ? values[current].value : 0) + +value
        )
      );

    addressLine.startsWith('=concat') &&
      dispatch(
        changeTableElemValue(
          current,
          (values[current] ? values[current].value : '') + value
        )
      );

    addressLine.startsWith('=average') &&
      valueType === 'number' &&
      dispatch(
        changeTableElemValue(
          current,
          (+(values[current] ? values[current].value : value) + +value) / 2
        )
      );
  }
};
