import s from "./hideCompleted.module.css";

const HideCompleted = ({ hideCompleted, setHideCompleted, todos }) => {
  const changeCompletionStatus = () => setHideCompleted(status => !status)

  return (
    <div className={s.wrapperCheckbox}>
      <label
        className={`${todos.length === 0 ? s.hide : s.label}`}>
        <input
          type="checkbox"
          checked={hideCompleted}
          onChange={changeCompletionStatus}
          className={s.checkbox}
        />
        Hide completed
      </label>
    </div>
  );
};

export default HideCompleted;
