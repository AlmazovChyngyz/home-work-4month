import React from 'react';
import classes from './modal.module.css';
import Input from '../Input/Input';


const Modal = (
    {handleOpen,
     handleTextInput,
     handleAdd
    }) => {
  return (
    <>
      <div className={classes.modalWrapper}></div>
      <div className={classes.modalContent}>
          <h1>Add Something</h1>
          <Input
              name={'add'}
              onChange={handleTextInput}/>
        <button onClick={handleAdd} className={classes.btnAdd}>Добавить</button>
        <button onClick={handleOpen} className={classes.btnClose}>Закрыть</button>
      </div>
    </>
  );
};

export default Modal;
//rsc
//rsfa