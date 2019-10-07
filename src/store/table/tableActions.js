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

export const setCurrentTableElement = (name, currency) => (dispatch, store) => {
  (!store().controls.addressLine || !store().table.current) &&
    dispatch({
      type: SET_CURRENT,
      current: name,
      currency
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

  const newestCurrent = values[current.name] && values[current.name].currency;

  if (current.name && current.name !== name && addressLine) {
    if (
      valueType === 'number' &&
      values[name] &&
      addressLine.startsWith('=sum')
    ) {
      const newTableValue = changeTableElemValue(
        current.name,
        +(values[current.name] ? values[current.name].value : 0) + +value
      );

      newestCurrent === values[name].currency
        ? dispatch(newTableValue)
        : (!newestCurrent || newestCurrent === 'NUM') &&
          (!values[name].currency || values[name].currency === 'NUM')
        ? dispatch(newTableValue)
        : alert('Wrong currency type');
    } else if (addressLine.startsWith('=sum')) alert('Cannot be added');

    if (addressLine.startsWith('=concat')) {
      value
        ? dispatch(
            changeTableElemValue(
              current.name,
              (values[current.name] ? values[current.name].value : '') + value
            )
          )
        : alert('Cannot be collected');
    }

    if (
      addressLine.startsWith('=average') &&
      valueType === 'number' &&
      values[name]
    ) {
      const newTableValue = changeTableElemValue(
        current.name,
        (+(values[current.name] ? values[current.name].value : value) +
          +value) /
          2
      );

      newestCurrent === values[name].currency
        ? dispatch(newTableValue)
        : (!newestCurrent || newestCurrent === 'NUM') &&
          (!values[name].currency || values[name].currency === 'NUM')
        ? dispatch(newTableValue)
        : alert('Wrong currency type');
    } else if (addressLine.startsWith('=average')) alert('Cannot be compared');
  }
};
