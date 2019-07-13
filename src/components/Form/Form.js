import React, { useState } from 'react';
import styled from 'styled-components';

const Form = () => {
  const [inputValue, setInputValue] = useState('');

  const handleFormSubmit = e => {
    e.preventDefault();
    console.log('submitted!');
  };

  return (
    <StyledForm onSubmit={handleFormSubmit}>
      <FormGroup>
        <FormLabel htmlFor="ipAddress">IP Address:</FormLabel>
        <FormInput
          type="text"
          id="ipAddress"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
      </FormGroup>
      <FormButton>Check IP</FormButton>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  width: 100%;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  font-size: 1.2rem;
`;

const FormInput = styled.input`
  font-size: inherit;
  font-family: inherit;
  border: 1px solid #000;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
`;

const FormButton = styled.button`
  font-size: 2.4rem;
  font-family: inherit;
  border: 1px solid transparent;
  border-radius: 4px;
  background: #c4c4c4;
  color: #000;
  padding: 0.5rem 1.5rem;
  text-transform: uppercase;
  cursor: pointer;
  display: block;
  margin-left: auto;
`;

export default Form;
