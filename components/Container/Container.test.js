import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Container from './Container';
import styles from './Container.module.scss';

describe('Container', () => {
  it('expect container header to exist', () => {
    render(<Container title="Test Container" />);

    const header = screen.getByText(/Test Container/);

    expect(header).toBeInTheDocument();
  });

  it('expect container size to default to medium', () => {
    render(<Container title="Test Container" />);

    const header = screen.getByText(/Test Container/);

    expect(header).toHaveClass(styles.medium);
  });

  it('expect huge containers to be huge', () => {
    render(<Container title="Test Container" size="huge" />);

    const header = screen.getByText(/Test Container/);

    expect(header).toHaveClass(styles.huge);
  });

  it('expect huge containers to be medium', () => {
    render(<Container title="Test Container" size="medium" />);

    const header = screen.getByText(/Test Container/);

    expect(header).toHaveClass(styles.medium);
  });

  it('expect huge containers to be small', () => {
    render(<Container title="Test Container" size="small" />);

    const header = screen.getByText(/Test Container/);

    expect(header).toHaveClass(styles.small);
  });
});