import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import ButtonInput from './ButtonInput';

describe('Button', () => {
  it('expect button text to exist', () => {
    render(<ButtonInput value="Hack mainframe" />);

    const button = screen.getByRole('button');

    expect(button).toHaveValue("Hack mainframe");
  });

  it('expect button onClick to not be called with onClick prop', () => {
    const onClick = jest.fn();

    render(<ButtonInput value="Hack mainframe" onClick={onClick} />);

    const button = screen.getByRole('button');

    expect(onClick).toHaveBeenCalledTimes(0);

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});