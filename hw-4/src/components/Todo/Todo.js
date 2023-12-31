import React, { useState } from 'react';
import classes from './todo.module.css';
import Button from '../Button/Button';
import ButtonAction from '../ButtonAction/ButtonAction';


const Todo = ({task,
               handleDelete,
               handleEdit,
               handleDone,
               handleSelectCurrent,
               isEdit,
               handleCancel,
}) => {
  const [newTitle, setNewTitle]= useState(task.title);
  if (isEdit) {
      return <div className={classes.changeWrapper}>
          <input className={classes.inputChange} type="text"
          value={newTitle}
          onChange={event =>
            setNewTitle(event.target.value)
          }/>
          <button className={classes.btnSave} onClick={() => {
              handleEdit ({
              ...task, title: newTitle
          });
          handleSelectCurrent(null);

          }}>Сохранить</button>
          <button className={classes.btnCancel} onClick={() => {
              handleSelectCurrent(null);
          }}>Отмена</button>
      </div>
    }
      return (
    <div className={`${classes.todo} ${task.completed && classes.isDone}`}>
      <h5>{task.id} {task.title}</h5>
      <ButtonAction
        type={'edit'}
        task={task}
        handleClick={handleSelectCurrent}
      >
        Редактировать
      </ButtonAction>
      <ButtonAction
        type={'done'}
        task={task}
        handleClick={handleDone}
      >
        Done
      </ButtonAction>
      <ButtonAction
        type={'delete'}
        handleClick={handleDelete}
        task={task}
      >
        Удалить
      </ButtonAction>
    </div>
  );
};


export default Todo;