import React, { memo } from 'react';
import CellContainer from '../../../containers/CellContainer';
import PropTypes from 'prop-types';

const Row = memo(({ rowIndex, alphabet }) => {
  const renderCells = letter => (
    <CellContainer key={`${letter}${rowIndex}`} {...{ rowIndex, letter }} />
  );

  return (
    <tr>
      <td className={rowIndex ? 'cell cell__ttl' : ''}>
        {rowIndex ? rowIndex : ''}
      </td>
      {alphabet && alphabet.map(renderCells)}
    </tr>
  );
});

Row.propTypes = {
  rowIndex: PropTypes.number,
  alphabet: PropTypes.arrayOf(PropTypes.string)
};

export default Row;
