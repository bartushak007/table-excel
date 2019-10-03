import React from 'react';
import { connect } from 'react-redux';
import Cell from '../components/blocks/cell';

import { selectValues, selectCurrent } from '../store/table/tableSelectors';
import {
  handleChangeTableElement,
  setCurrentTableElement,
  doJobWithFormula,
  changeTableElemValueCurrency
} from '../store/table/tableActions';

const CellContainer = ({
  rowIndex,
  letter,
  tableValue,
  handleChangeTableElement,
  setCurrentTableElement,
  isCurrentTableColl,
  name,
  isCurrent,
  doJobWithFormula,
  changeTableElemValueCurrency
}) => {
  const value = tableValue ? tableValue.value : '';
  const valueType = tableValue ? tableValue.valueType : null;
  const currency = tableValue ? tableValue.currency : null;

  return (
    <Cell
      {...{
        rowIndex,
        letter,
        value,
        valueType,
        name,
        handleChangeTableElement,
        setCurrentTableElement,
        isCurrentTableColl,
        isCurrent,
        doJobWithFormula,
        changeTableElemValueCurrency,
        currency
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
  {
    handleChangeTableElement,
    setCurrentTableElement,
    doJobWithFormula,
    changeTableElemValueCurrency
  }
)(CellContainer);
