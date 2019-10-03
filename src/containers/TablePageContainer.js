import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Table from '../pages/table';
import { fetchTable } from '../store/table/tableActions';
import {
  selectLoading,
  selectAlphabet,
  selectRows
} from '../store/table/tableSelectors';

const TablePageContainer = ({ fetchTable, loading, alphabet, rows }) => {
  useEffect(fetchTable, []);

  return !loading ? <Table {...{ alphabet, rows }} /> : <div>Loading...</div>;
};

const mapStateToProps = state => {
  return {
    loading: selectLoading(state),
    alphabet: selectAlphabet(state),
    rows: selectRows(state)
  };
};

export default connect(
  mapStateToProps,
  { fetchTable }
)(TablePageContainer);
