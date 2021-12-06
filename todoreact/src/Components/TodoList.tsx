import { JsxAttributeLike, JsxElement } from 'typescript';
import { Todo, TodoListSetFunc } from '../Interfaces/Interfaces';
import TodoCard from './TodoCard';

export interface TodoListProps {
  todos: Todo[];
  todoListSet: TodoListSetFunc;
}

const TodoList = ({ todos, todoListSet }: TodoListProps) => {
  return (
    <section data-testid='todo-list'>
      {todos.map((todo,index) => (
        <TodoCard key={todo.id+index} todo={todo} todoListSet={todoListSet} />
      ))}
    </section>
  );
};

export default TodoList;
