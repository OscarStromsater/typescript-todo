import { Todo, TodoListSetFunc } from '../Interfaces/Interfaces';
export const setUrgent = (todo: Todo): string =>
  todo.checkUrgent() ? '--urgent' : '--active';

interface TodoProps {
  todo: Todo;
  todoListSet: TodoListSetFunc;
}

const TodoCard = ({ todo, todoListSet }: TodoProps) => {

  const handleToggle = () => {
    todo.toggleDone();
    todoListSet((todoArr) =>
      todoArr.map((existingTodo) =>
        existingTodo.id === todo.id ? todo : existingTodo
      )
    );
  };

  return (
    <div
      data-testid='todo-card'
      onClick={handleToggle}
      className={`todocard${setUrgent(todo)}`}>
      {'' + todo.done}
    </div>
  );
};

export default TodoCard;
