import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Cell = memo(
  ({
    rowIndex,
    letter,
    value,
    isCurrent,
    changeTableElemValue,
    setCurrentTableElement,
    isCurrentTableColl,
    name
  }) => {
    return (
      <td
        className={`${
          isCurrent && rowIndex
            ? 'cell--current'
            : rowIndex
            ? 'cell'
            : 'cell cell__ttl'
        } ${isCurrentTableColl ? 'cell__ttl--highlight' : ''}`}
        onClick={setCurrentTableElement}
      >
        {rowIndex ? (
          <input
            className="cell__field"
            value={value}
            name={name}
            title={value}
            onChange={changeTableElemValue}
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
  value: PropTypes.string,
  changeTableElemValue: PropTypes.func,
  name: PropTypes.string,
  isCurrentTableColl: PropTypes.bool
};

export default Cell;
