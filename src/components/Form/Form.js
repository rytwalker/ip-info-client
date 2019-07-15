import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getAddressData } from '../../store/actions';

const Form = ({ getAddressData, history }) => {
  const [inputValue, setInputValue] = useState('');
  const [isValidInput, setValidInput] = useState(true);

  const handleFormSubmit = e => {
    e.preventDefault();
    getAddressData(inputValue);
    history.push('/results');
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
  border-radius: 4px;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  &:focus {
    outline-style: none;
    border-color: ${({ isValid }) => (isValid ? '#000' : 'red')};
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
  background: ${({ disabled }) => (disabled ? '#c4c4c4' : '#568ea3')};
  color: ${({ disabled }) => (disabled ? '#000' : '#fff')};
  padding: 0.5rem 1.5rem;
  text-transform: uppercase;
  cursor: pointer;
  display: block;
  margin-left: auto;
  transition: all 0.2s;
  &:hover {
    background: ${({ disabled }) => (disabled ? '#c4c4c4' : '#68c3d4')};
  }
`;

export default connect(
  null,
  { getAddressData }
)(Form);
