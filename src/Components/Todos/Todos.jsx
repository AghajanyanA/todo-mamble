import { useState } from "react";
import Todo from './todo/Todo'
import NoTodo from "./noTodo/NoTodo";
import s from "./todos.module.css";
import ConfirmationWindow from "./confirmationWindow/ConfirmationWindow";

const Todos = ({ todos, hideCompleted, setTodos, currentParsedTodos }) => {
  const [showDeleteWindow, setShowDeleteWindow] = useState(false);
  const [chosenNum, setChosenNum] = useState(null);

  const handleRemove = (id) => {
    setShowDeleteWindow(true)
    setChosenNum(id)
  };

  return (
    <>
      {todos.length === 0 && <NoTodo />}
      <div className={s.wrapper}>
        <ConfirmationWindow 
          currentParsedTodos={currentParsedTodos} todos={todos} setTodos={setTodos} 
          showDeleteWindow={showDeleteWindow} setShowDeleteWindow={setShowDeleteWindow}
          chosenNum={chosenNum} setChosenNum={setChosenNum}
        />

          { todos
            .sort((a, b) => b.id - a.id)
            .filter(item => {
              if (hideCompleted && item.completed) {
                return null
              }
              return item
            })
            .map(task => (
              <Todo key={task.id} todos={ todos } setTodos={ setTodos } task={ task } handleRemove={ handleRemove } currentParsedTodos={ currentParsedTodos } />
            ))
          }
      </div>
    </>
  );
};

export default Todos;
