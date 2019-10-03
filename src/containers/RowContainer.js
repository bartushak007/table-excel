import React from 'react';
import { connect } from 'react-redux';
import Row from '../components/blocks/row';

import { selectCurrent } from '../store/table/tableSelectors';

const CellContainer = props => {
  return <Row {...props} />;
};

const mapStateToProps = (state, props) => {
  const current = selectCurrent(state);
  const isCurrentTableRow = current
    ? +current.slice(1) === +props.rowIndex
    : false;

  return { isCurrentTableRow, ...props };
};

export default connect(
  mapStateToProps,
  {}
)(CellContainer);
