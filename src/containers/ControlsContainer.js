import React from 'react';
import { connect } from 'react-redux';

import { selectCurrent, selectValues } from '../store/table/tableSelectors';
import { selectAddressLine } from '../store/controls/controlsSelectors';
import { setAddressLine } from '../store/controls/controlsActions';

import Controls from '../components/sections/controls';

const ControlsContainer = props => {
  return <Controls {...props} />;
};

const mapStateToProps = (state, props) => {
  const current = selectCurrent(state);
  const addressLine = selectAddressLine(state);
  const currentValue = selectValues(state)[current];

  return {
    ...props,
    current,
    currentType: currentValue ? currentValue.valueType : null,
    addressLine
  };
};

export default connect(
  mapStateToProps,
  { setAddressLine }
)(ControlsContainer);
