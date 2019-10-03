import React from 'react';
import { connect } from 'react-redux';
import Cell from '../components/blocks/cell';

import { selectValues } from '../store/table/tableSelectors';
import { changeTableElemValue } from '../store/table/tableActions';

const CellContainer = ({
  rowIndex,
  letter,
  tableValue,
  changeTableElemValue,
  name
}) => {
  const value = tableValue ? tableValue.value : '';

  return <Cell {...{ rowIndex, letter, value, name, changeTableElemValue }} />;
};

const mapStateToProps = (state, props) => {
  const name = `${props.letter}${props.rowIndex}`;

  return {
    tableValue: selectValues(state)[name],
    name,
    ...props
  };
};

export default connect(
  mapStateToProps,
  { changeTableElemValue }
)(CellContainer);
