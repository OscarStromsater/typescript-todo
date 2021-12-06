import { useState,useEffect } from 'react';
import Form from './Components/Form';
import './App.css';
import { Todo } from './Interfaces/Interfaces';
import TodoList from './Components/TodoList';

function App() {
  const [todoList, todoListSet] = useState<Todo[]>([]);

  useEffect(() => {
      const todos = localStorage.getItem('todoList')||'[]'
      todoListSet(JSON.parse(todos))
  },[])

  useEffect(()=> {
    localStorage.setItem('todoList',JSON.stringify(todoList))
  },[todoList])

  return (
    <main className='App' data-testid='app'>
      <Form todoListSet={todoListSet} />
      <TodoList todos={todoList} todoListSet={todoListSet}/>
    </main>
  );
}

export default App;
