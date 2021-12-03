import { render, screen } from '@testing-library/react';
import Form from './Form';
import { Todo } from '../Interfaces/Interfaces';

const stateUpdate = (callback: (prevState: Todo[]) => Todo[]) => {
  console.log(callback);
};

describe('Form test suite', () => {
  test('renders learn react link', () => {
    render(<Form todoListSet={stateUpdate} />);
    const formComponent = screen.getByTestId('todo-form');
    expect(formComponent).toBeInTheDocument();
  })
});
