import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Cell = memo(
  ({
    rowIndex,
    letter,
    value,
    isCurrent,
    handleChangeTableElement,
    setCurrentTableElement,
    isCurrentTableColl,
    name,
    valueType,
    doJobWithFormula
  }) => {
    const handleClick = ({ target: { name, value } }) => {
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
        onClick={handleClick}
      >
        {rowIndex ? (
          <input
            className="cell__field"
            value={value}
            name={name}
            title={value}
            onChange={handleChangeTableElement}
          />
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
  isCurrentTableColl: PropTypes.bool
};

export default Cell;
