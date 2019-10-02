import React from 'react';
import { connect } from 'react-redux';
import Home from '../pages/home';

const HomePageContainer = props => {
  return <Home {...props} />;
};

const mapStateToProps = state => {
  return { ...state };
};

export default connect(
  mapStateToProps,
  {}
)(HomePageContainer);
