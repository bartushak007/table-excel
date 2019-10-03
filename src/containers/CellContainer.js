import React from 'react';
import { connect } from 'react-redux';
import Cell from '../components/blocks/cell';

import { selectValues, selectCurrent } from '../store/table/tableSelectors';
import {
  changeTableElemValue,
  setCurrentTableElement
} from '../store/table/tableActions';

const CellContainer = ({
  rowIndex,
  letter,
  tableValue,
  changeTableElemValue,
  setCurrentTableElement,
  isCurrentTableColl,
  name,
  isCurrent
}) => {
  const value = tableValue ? tableValue.value : '';
  const valueType = tableValue ? tableValue.type : null;

  return (
    <Cell
      {...{
        rowIndex,
        letter,
        value,
        valueType,
        name,
        changeTableElemValue,
        setCurrentTableElement,
        isCurrentTableColl,
        isCurrent
      }}
    />
  );
};

const mapStateToProps = (state, props) => {
  const name = `${props.letter}${props.rowIndex}`;

  const current = selectCurrent(state);
  const isCurrentTableColl =
    current && props.rowIndex === 0 ? current[0] === props.letter : false;

  return {
    tableValue: selectValues(state)[name],
    isCurrent: selectCurrent(state) === name,
    isCurrentTableColl,
    name,
    ...props
  };
};

export default connect(
  mapStateToProps,
  { changeTableElemValue, setCurrentTableElement }
)(CellContainer);
