import TodoCard, { setUrgent } from './TodoCard';
import { Todo, TodoListSetFunc } from '../Interfaces/Interfaces';
import { render, screen } from '@testing-library/react';

const urgentTodo = new Todo('hello', false, 'check', new Date());
const activeTodo = new Todo('', false, '');

const stateUpdate = (callback: (prevState: Todo[]) => Todo[]) => {
  console.log(callback);
};


test('renders TodoCard', () => {
  render(<TodoCard todo={urgentTodo} todoListSet={stateUpdate} />);
  const TodoComponent = screen.getByTestId('todo-card');
  expect(TodoComponent).toBeInTheDocument();
});

test('renders TodoCard with correct title & desc', ()=>{
  render(<TodoCard todo={urgentTodo} todoListSet={stateUpdate} />);
  const todoText = screen.getAllByText(/\b(hello|check)\b/im);
  expect(todoText.length).toBe(2)
})

test('renders TodoCard with urgent', () => {
  const { getByTestId } = render(
    <TodoCard todo={urgentTodo} todoListSet={stateUpdate} />
  );
  expect(getByTestId('todo-card')).toHaveClass('todocard--urgent');
});

test('renders TodoCard with active', () => {
  const { getByTestId } = render(
    <TodoCard todo={activeTodo} todoListSet={stateUpdate} />
  );
  expect(getByTestId('todo-card')).toHaveClass('todocard--active');
});

test('verify set urgent', () => {
  const expectedString = '--urgent';
  expect(setUrgent(urgentTodo)).toEqual(expectedString);
});
