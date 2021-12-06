import { Todo, TodoListSetFunc } from '../Interfaces/Interfaces';
export const setUrgent = (todo: Todo): string =>
  Todo.checkUrgent(todo) ? '--urgent' : '--active';

interface TodoProps {
  todo: Todo;
  todoListSet: TodoListSetFunc;
}

const TodoCard = ({ todo, todoListSet }: TodoProps) => {
  const handleToggle = () => {
    Todo.toggleDone(todo);
    todoListSet((todoArr) =>
      todoArr.map((existingTodo) =>
        existingTodo.id === todo.id ? todo : existingTodo
      )
    );
  };

  return (
    <article
      data-testid='todo-card'
      onClick={handleToggle}
      className={`todocard${setUrgent(todo)} todocard${
        todo.done ? '--done' : ''
      }`}>
      <h2>{todo.title}</h2>
      {todo.description && (
        <p data-testid='todo-description'>{todo.description}</p>
      )}
    </article>
  );
};

export default TodoCard;
