import { useState } from "react";
import NoTodo from "./NoTodo/NoTodo";
import s from "./todos.module.css";

const Todos = ({ todos, hideCompleted, setTodos, currentParsedTodos }) => {
  const [showDeleteWindow, setShowDeleteWindow] = useState(false) //change to false when finished
  const [chosenNum, setChosenNum] = useState(null)



  const handleCompleted = (e) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === +e.target.dataset.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
    const currentElement = currentParsedTodos.map((item) =>
      item.id === +e.target.dataset.id
        ? { ...item, completed: e.target.checked }
        : item
    );
    localStorage.setItem("todos", JSON.stringify(currentElement));
  };

  const handleRemove = (id) => {
    setShowDeleteWindow(true)
    setChosenNum(id)
  };

  const handleYes = () => {
    setTodos(todos.filter((item) => item.id !== chosenNum))
    localStorage.setItem(
      "todos",
      JSON.stringify(currentParsedTodos.filter((todo) => todo.id !== chosenNum))
    )
    setShowDeleteWindow(false)
    setChosenNum(null)
  }
  const handleNo = () => {
    setShowDeleteWindow(false)
    setChosenNum(null)
  }
  const handleOutsideClick = e => {
    if(e.target !== e.currentTarget.children[0]){
      handleNo()
    }
  }

  return (
    <>
      {todos.length === 0 && <NoTodo />}
      <div className={s.wrapper}>
      <div className={showDeleteWindow ? s.showWindow : s.hideWindow} onClick={handleOutsideClick} >
        <div className={s.confWindow}>
          <h5>Are you sure you want to delete?</h5>
          <div className={s.answers}>
            <p className={s.yes} onClick={handleYes}>Yes</p>
            <p className={s.no} onClick={handleNo}>No</p>
          </div>
        </div>
      </div>
        {todos
          .sort((a, b) => b.id - a.id)
          .filter(item => {
            if (hideCompleted && item.completed) {
              return null
            }
              return item
          })
          .map((task) => (
          <div className={s.subwrap} key={task.id}>
            <div className={s.todos}>
              <input
                type="checkbox"
                checked={task.completed}
                data-id={task.id}
                onChange={handleCompleted}
              />
              <p className={`${s.todo} ${task.completed ? s.todoCompleted : ''}`}>{task.todo}</p>
            </div>
            <div className={s.delete} onClick={() => handleRemove(task.id)} />
          </div>
          ))}
      </div>
    </>
  );
};

export default Todos;
