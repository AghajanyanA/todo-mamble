import s from './confirmationWindow.module.css'

const ConfirmationWindow = ({showDeleteWindow, setShowDeleteWindow, chosenNum, setChosenNum, todos, setTodos, currentParsedTodos}) => {
  const handleNo = () => {
    setShowDeleteWindow(false)
    setChosenNum(null)
  }

  const handleYes = () => {
    setTodos(todos.filter((item) => item.id !== chosenNum))
    localStorage.setItem(
      "todos",
      JSON.stringify(currentParsedTodos.filter((todo) => todo.id !== chosenNum))
    )
    setShowDeleteWindow(false)
    setChosenNum(null)
  }

  const handleEnterKey = e => {
    if (e.key === 'Enter') {
      handleYes();
    }
  };

  const handleOutsideClick = e => {
    if (e.target !== e.currentTarget.children[0]) {
      handleNo();
    };
  };

    return (
        <div className={showDeleteWindow ? s.showWindow : s.hideWindow} onClick={handleOutsideClick} >
          <div className={s.confWindow} onKeyUp={handleEnterKey}>
            <h5>Are you sure you want to delete?</h5>
            <div className={s.answers}>
              <p className={s.yes} onClick={handleYes}>Yes</p>
              <p className={s.no} onClick={handleNo}>No</p>
            </div>
          </div>
        </div>
    )
};

export default ConfirmationWindow;

