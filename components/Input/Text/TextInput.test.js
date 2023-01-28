import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import TextInput from './TextInput';

describe('TextInput', () => {
  it('expect input text to be empty', () => {
    render(<TextInput />);

    const input = screen.getByRole('textbox');

    expect(input).toHaveValue("");
  });

  it('expect input text to be the same as value', () => {
    render(<TextInput value="PC Load Letter?" />);

    const input = screen.getByRole('textbox');

    expect(input).toHaveValue("PC Load Letter?");
  });

  it('expect input placeholder to be empty', () => {
    render(<TextInput placeholder="Enter SSN 😈" />);

    const input = screen.queryByPlaceholderText("Enter SSN 😈");

    expect(input).toBeInTheDocument();
  });

  it('expect input onChange handler to fire when typing', () => {
    const onChange = jest.fn();

    render(<TextInput value="I won!" onChange={onChange} />);

    const input = screen.getByRole('textbox');

    expect(onChange).toHaveBeenCalledTimes(0);

    fireEvent.focus(input);

    fireEvent.change(input, { target: { value: 'No, I won!' } });

    expect(onChange).toHaveBeenCalledTimes(1);

    expect(input).toHaveValue("No, I won!");
  });
});