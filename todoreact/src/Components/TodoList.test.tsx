import { render, screen } from '@testing-library/react';
import { Todo } from '../Interfaces/Interfaces';
import TodoList from './TodoList';
import TodoCard from './TodoCard'

const stateUpdate = (callback: (prevState: Todo[]) => Todo[]) => {
  console.log(callback);
};

const arrayTodo: Todo[] = [
 new Todo('milk',false,'fridge'),
 new Todo('cheese',true,'shops'),
 new Todo('frosties',false,'They\'reeeeeeee Greaaaaat')
] 

test('renders the list component', () => {
  render(<TodoList todos={arrayTodo} todoListSet={stateUpdate}/>);
  const list = screen.getByTestId('todo-list');
  expect(list).toBeInTheDocument();
});

test('renders a list of TodoCards when passed an array', () => {
  render(<TodoList todos={arrayTodo} todoListSet={stateUpdate} />)
  const todoCards = screen.getAllByTestId('todo-card') 
  expect(todoCards.length).toBe(3)
})