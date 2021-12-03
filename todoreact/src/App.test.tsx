import { render } from '@testing-library/react';
import App from './App';

describe('App test suite', () => {
  test('renders app', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('app')).toBeInTheDocument();
  });
  test('renders app', () => {
    const { getAllByTestId } = render(<App />);
    expect(getAllByTestId('todo-form')[0]).toBeInTheDocument();
  });
});
