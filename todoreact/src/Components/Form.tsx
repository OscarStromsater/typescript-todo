import { FormEvent, useState } from 'react';
import { Todo, InputFields, TodoListSetFunc } from '../Interfaces/Interfaces';

interface TodoFormProps {
  todoListSet: TodoListSetFunc;
}

const Form = ({ todoListSet }: TodoFormProps) => {
  const [input, inputSet] = useState<InputFields>({
    title: '',
    description: '',
  });

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    const { title, description } = input;
    const todo = new Todo(title, false, description);
    todoListSet((prevState) => [...prevState, todo]);
    inputSet({title:'',description:''})
  };

  const handleInput = (e: FormEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    inputSet((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <section data-testid='todo-form'>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            name='title'
            value={input.title}
            onChange={handleInput}></input>
        </label>
        <label>
          <input
            name='description'
            value={input.description}
            onChange={handleInput}></input>
        </label>
        <button type='submit'>Add todo</button>
      </form>
    </section>
  );
};

export default Form;
