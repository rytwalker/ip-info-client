import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ResultsView = props => {
  const [data, setData] = useState(props.addressData);
  useEffect(() => {
    setData(props.addressData);
  }, [data]);
  console.log(props.addressData);
  return (
    <>
      <AppHeading>Results</AppHeading>
      {}
      <Link to="/">Go Back</Link>
    </>
  );
};

const AppHeading = styled.h1`
  font-size: 3.6rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

// const AppText = styled.p`
//   font-weight: 300;
//   margin-bottom: 2rem;
// `;

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
