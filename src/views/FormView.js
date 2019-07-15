import React from 'react';
import styled from 'styled-components';
import Form from '../components/Form/Form';

const FormView = props => {
  // console.log(process.env.REACT_APP_AWS_URL);
  return (
    <>
      <AppHeading>IP Info</AppHeading>
      <AppText>
        Welcome to IP INFO! Please enter an IP address! Please input a valid IP
        address or domain/file hash to see more information about it!
      </AppText>
      <Form {...props} />
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

export default FormView;
