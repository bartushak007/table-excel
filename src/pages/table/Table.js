import React from 'react';
import PropTypes from 'prop-types';

import RowContainer from '../../containers/RowContainer';
import ControlsContainer from '../../containers/ControlsContainer';

const Table = ({ alphabet, rows }) => {
  const tableRows = new Array(rows).fill(null);

  const renderRows = (_, index) => {
    return <RowContainer key={index} rowIndex={index} alphabet={alphabet} />;
  };

  return (
    <div className="table-page">
      <ControlsContainer />
      <div className="table-page__table-container">
        <table className="table-page__table">
          <thead>{tableRows.map(renderRows)}</thead>
        </table>
      </div>
    </div>
  );
};

Table.propTypes = {
  alphabet: PropTypes.arrayOf(PropTypes.string),
  rows: PropTypes.number
};

export default Table;
