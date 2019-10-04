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

  if (current.name && current.name !== name && addressLine.startsWith('=sum')) {
    if (valueType === 'number' && values[name]) {
      const newTableValue = changeTableElemValue(
        current.name,
        +(values[current.name] ? values[current.name].value : 0) + +value
      );

      current.currency && current.currency === values[name].currency
        ? dispatch(newTableValue)
        : (!current.currency && !values[name].currency) ||
          !values[name].currency === 'NUM'
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
      current.name &&
      current.name !== name &&
      addressLine.startsWith('=average')
    ) {
      if (!current.currency) {
        alert('Forbidden');
        return;
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

        current.currency && current.currency === values[name].currency
          ? dispatch(newTableValue)
          : (!current.currency && !values[name].currency) ||
            !values[name].currency === 'NUM'
          ? dispatch(newTableValue)
          : alert('Wrong currency type');
      } else alert('Cannot be compared');
    }
  }
};
