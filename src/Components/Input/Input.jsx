import { useState } from "react";
import s from "./input.module.css";

const Input = ({ setTodos, todos, currentParsedTodos }) => {
  const [inputValue, setInputValue] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputValue.trim().length !== 0) {
      const newTodo = {
        id: currentParsedTodos.length,
        todo: inputValue,
        completed: false,
      };
  
      setInputValue('');
      setTodos([...todos, newTodo]);
  
      localStorage.setItem(
        "todos",
        JSON.stringify(currentParsedTodos.concat(newTodo))
      );
    }
  };

  const charsLimited = inputValue.length > 54 ? true : false;

  return (
    <div className={s.inputWrapper}>
      <form onSubmit={handleSubmit}>
        <p className={s.task}>task</p>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Write here"
          className={`${s.textInput} ${charsLimited ? s.textInputRedBorder : ''}`}
        />
        {charsLimited && <p className={s.charsLimited}>Task content can contain max 54 characters.</p>}
        <input type="submit" value="Add" disabled={charsLimited} className={s.submitBTN} />
      </form>
    </div>
  );
};

export default Input;
