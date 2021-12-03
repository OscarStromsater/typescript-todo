import { useState } from 'react';
import Form from './Components/Form';
import './App.css';
import { Todo } from './Interfaces/Interfaces';
import TodoCard from './Components/TodoCard';

function App() {
  const [todoList, todoListSet] = useState<Todo[]>([]);

  return (
    <main className='App' data-testid='app'>
      <Form todoListSet={todoListSet} />
      {todoList.map((todo) => (
        <TodoCard todo={todo} todoListSet={todoListSet} />
      ))}
    </main>
  );
}

export default App;
