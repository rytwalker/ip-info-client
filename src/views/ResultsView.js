import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ResultsView = () => {
  return (
    <>
      <AppHeading>Results</AppHeading>
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

export default ResultsView;
