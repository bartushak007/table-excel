import React from 'react';
import PropTypes from 'prop-types';

import RowContainer from '../../containers/RowContainer';

const Table = ({ alphabet, rows }) => {
  const tableRows = new Array(rows).fill(null);

  const renderRows = (_, index) => {
    return <RowContainer key={index} rowIndex={index} alphabet={alphabet} />;
  };

  return (
    <table className="table">
      <thead>{tableRows.map(renderRows)}</thead>
    </table>
  );
};

Table.propTypes = {
  alphabet: PropTypes.arrayOf(PropTypes.string),
  rows: PropTypes.number
};

export default Table;
