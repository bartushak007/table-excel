import React, { memo } from 'react';
import PropTypes from 'prop-types';

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
    changeTableElemValueCurrency
  }) => {
    const handleClick = () => {
      doJobWithFormula(value, name, valueType);
      setCurrentTableElement(name);
    };

    return (
      <td
        className={`${
          isCurrent && rowIndex
            ? 'cell--current'
            : rowIndex
            ? 'cell'
            : 'cell cell__ttl'
        } ${isCurrentTableColl ? 'cell__ttl--highlight' : ''}`}
      >
        {rowIndex ? (
          <div className="cell__content" onClick={handleClick}>
            {!currency || isCurrent ? (
              <input
                className={`cell__field ${valueType}`}
                value={value}
                name={name}
                title={value}
                onChange={handleChangeTableElement}
              />
            ) : (
              value + currency
            )}
            {valueType === 'number' && isCurrent && (
              <div
                className="cell__currency"
                onClick={() => changeTableElemValueCurrency(name, 'UAH')}
              >
                UAH
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
