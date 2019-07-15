import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ResultsView = props => {
  console.log(props.addressData);
  return (
    <>
      <AppHeading>Results</AppHeading>
      <AppText>
        {!props.addressData ? 'Loading...' : props.addressData.message}
      </AppText>
      <Link to="/">Go Back</Link>
    </>
  );
};

const AppHeading = styled.h1`
  font-size: 3.6rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

const AppText = styled.p`
  font-weight: 300;
  margin-bottom: 2rem;
`;

const mapStateToProps = state => {
  return {
    addressData: state.addressData.addressData,
    isFetching: state.addressData.isFetching,
    error: state.addressData.error
  };
};

export default connect(
  mapStateToProps,
  {}
)(ResultsView);
