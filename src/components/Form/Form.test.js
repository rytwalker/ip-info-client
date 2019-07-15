import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Form from './Form';

afterEach(cleanup);

test('<Form />', () => {
  const { debug, getByLabelText } = render(<Form />);
  debug();

  //  input fills with valid address
  fireEvent.change(getByLabelText(/IP Address:/i), {
    target: { value: '1.2.3.4' }
  });
});
