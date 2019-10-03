import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Cell = memo(({ rowIndex, letter, value, changeTableElemValue, name }) => {
  return (
    <td className={rowIndex ? 'cell' : 'cell cell__ttl'}>
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
});

Cell.propTypes = {
  rowIndex: PropTypes.number,
  letter: PropTypes.string,
  value: PropTypes.string,
  changeTableElemValue: PropTypes.func,
  name: PropTypes.string
};

export default Cell;
