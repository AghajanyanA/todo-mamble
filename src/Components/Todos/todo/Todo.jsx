import s from './todo.module.css'

const Todo = ({task, todos, setTodos, handleRemove, currentParsedTodos}) => {

  const handleCompleted = e => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === e.target.dataset.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    )
    
    const updatedTaskList = currentParsedTodos.map(todo =>
      todo.id === e.target.dataset.id
        ? { ...todo, completed: task.completed }
        : todo
    );
    
    localStorage.setItem("todos", JSON.stringify(updatedTaskList));
  };
  
    return (
        <div className={s.subwrap} key={task.id}>
              <div className={s.todos}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  data-id={task.id}
                  onChange={handleCompleted}
                />
                <p className={`${s.todo} ${task.completed ? s.todoCompleted : ''}`}>{ task.todo }</p>
              </div>
            <div className={s.delete} onClick={() => handleRemove(task.id)} />
        </div>
    )
}

export default Todo;