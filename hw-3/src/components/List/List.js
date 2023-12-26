import React, {useState} from 'react';
import Todo from '../Todo/Todo';


const List = ({tasks, handleDelete, handleCancel}) => {
    return (
    <div>
      {tasks.map(task=>
          <Todo
              key={task.id}
              task={task}
              handleDelete={handleDelete}
              handleCancel={handleCancel}
          />)}
    </div>
  );
};

export default List;