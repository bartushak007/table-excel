import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Table from '../pages/table';
import { fetchTable } from '../store/fetchTable/fetchTableActions';
import {
  selectValues,
  selectLoading,
  selectAlphabet,
  selectRows
} from '../store/fetchTable/fetchTableSelectors';

const TablePageContainer = ({
  fetchTable,
  tableValues,
  loading,
  alphabet,
  rows
}) => {
  useEffect(fetchTable, []);

  return !loading ? (
    <Table {...{ tableValues, alphabet, rows }} />
  ) : (
    <div>Loading...</div>
  );
};

const mapStateToProps = state => {
  return {
    tableValues: selectValues(state),
    loading: selectLoading(state),
    alphabet: selectAlphabet(state),
    rows: selectRows(state)
  };
};

export default connect(
  mapStateToProps,
  { fetchTable }
)(TablePageContainer);
