import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { decorateCurrency } from '../../../helpers';

const Cell = memo(
  ({
    rowIndex,
    letter,
    value,
    isCurrent,
    currency,
    handleChangeTableElement,
    setCurrentTableElement,
    isCurrentTableColl,
    name,
    valueType,
    doJobWithFormula,
    changeTableElemValueCurrency,
    currencyList
  }) => {
    const handleClick = () => {
      doJobWithFormula(value, name, valueType);
      setCurrentTableElement(name, currency);
    };

    const handleChangeCurrency = () => {
      const array = currencyList || ['num'];
      const currencyIndex = array.findIndex(elem => {
        return (currency || array[0]) === elem;
      });

      const nextCurrency =
        currencyIndex === array.length - 1
          ? array[0]
          : array[currencyIndex + 1];

      changeTableElemValueCurrency(name, nextCurrency);
    };

    const decoratedCurrencyValue = currency
      ? decorateCurrency(value, currency)
      : '';

    const cellStyleList = `${
      isCurrent && rowIndex
        ? 'cell--current'
        : rowIndex
        ? 'cell'
        : 'cell cell__ttl'
    } ${isCurrentTableColl ? 'cell__ttl--highlight' : ''}`;

    return (
      <td className={cellStyleList} onClick={handleClick}>
        {rowIndex ? (
          <div
            className="cell__content"
            title={
              currency === currencyList[0] ? value : decoratedCurrencyValue
            }
          >
            {!currency || isCurrent || currency === currencyList[0] ? (
              <input
                className={`cell__field ${valueType}`}
                value={value}
                name={name}
                onChange={handleChangeTableElement}
              />
            ) : (
              decoratedCurrencyValue
            )}
            {valueType === 'number' && isCurrent && (
              <div className="cell__currency" onClick={handleChangeCurrency}>
                {currency || currencyList[0]}
              </div>
            )}
          </div>
        ) : (
          letter
        )}
      </td>
    );
  }
);

Cell.propTypes = {
  rowIndex: PropTypes.number,
  letter: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleChangeTableElement: PropTypes.func,
  name: PropTypes.string,
  isCurrentTableColl: PropTypes.bool,
  doJobWithFormula: PropTypes.func,
  setCurrentTableElement: PropTypes.func,
  valueType: PropTypes.string,
  isCurrent: PropTypes.bool,
  changeTableElemValueCurrency: PropTypes.func
};

export default Cell;
