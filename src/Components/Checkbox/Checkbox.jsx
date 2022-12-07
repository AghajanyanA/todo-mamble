import s from "./checkbox.module.css";

const Checkbox = ({ hideCompleted, setHideCompleted, todos }) => {
  return (
    <div className={s.wrapper}>
      <label
        className={`${todos.length === 0 ? s.hide : s.label}`}>
        <input
          type="checkbox"
          checked={hideCompleted}
          onChange={() => setHideCompleted((prev) => !prev)}
          className={s.checkbox}
        />
        Hide completed
      </label>
    </div>
  );
};

export default Checkbox;
