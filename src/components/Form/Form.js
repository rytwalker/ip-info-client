import React, { useState } from 'react';
import styled from 'styled-components';

const Form = () => {
  const [inputValue, setInputValue] = useState('');
  const [isValidInput, setValidInput] = useState(true);

  const handleFormSubmit = e => {
    e.preventDefault();
    console.log('submitted!');
  };

  const handleInputChange = e => {
    setInputValue(e.target.value);
    if (isIPAddress(inputValue)) {
      setValidInput(true);
    } else {
      setValidInput(false);
    }
  };

  const isIPAddress = input => {
    const inputArr = [...input.split('.')];
    let address = true;
    if (inputArr.length === 4) {
      inputArr.forEach(block => {
        console.log(block);
        if (parseInt(block) > 255 || parseInt(block) < 0) {
          address = false;
        }
      });
    } else {
      address = false;
    }

    return address;
  };

  return (
    <StyledForm onSubmit={handleFormSubmit}>
      <FormGroup>
        <FormLabel htmlFor="ipAddress">IP Address:</FormLabel>
        <FormInput
          type="text"
          id="ipAddress"
          value={inputValue}
          onChange={handleInputChange}
          isValid={isValidInput}
        />
        {!!inputValue.length && (
          <Message isValid={isValidInput}>
            {isValidInput
              ? 'IP Address Valid!'
              : 'Please enter a valid IP address.'}
          </Message>
        )}
      </FormGroup>
      <FormButton disabled={!inputValue.length || !isValidInput}>
        Check IP
      </FormButton>
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
  /* border-color: ${({ isValid }) => (isValid ? '#000' : 'red')}; */
  border-radius: 4px;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  &:focus {
    outline-style: none;
    /* outline-width: 1px; */
    border-color: ${({ isValid }) => (isValid ? 'green' : 'red')};
  }
`;

const Message = styled.div`
  font-size: 1rem;
  color: ${({ isValid }) => (isValid ? 'green' : 'red')};
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
