import { useState } from 'react';
import s from'./app.module.css';
import Checkbox from './Components/Checkbox/Checkbox';
import Input from './Components/Input/Input';
import Todos from './Components/Todos/Todos'


function App() {
  const currentParsedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, setTodos] = useState(currentParsedTodos)
  const [hideCompleted, setHideCompleted] = useState(false)
  
  return (
    <div className={s.app}>
      <Checkbox 
        todos={todos}
        hideCompleted={hideCompleted}
        setHideCompleted={setHideCompleted}
      />
      <Input
        setTodos={setTodos}
        todos={todos}
        currentParsedTodos={currentParsedTodos}
      />
      <Todos 
        todos={todos}
        hideCompleted={hideCompleted}
        setTodos={setTodos}
        currentParsedTodos={currentParsedTodos}
      />
    </div>
  );
}

export default App;
