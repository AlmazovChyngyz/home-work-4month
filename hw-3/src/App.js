import './App.css';
import Modal from './components/Modal/Modal';
import {useEffect, useState} from 'react';
import List from './components/List/List';


function App() {
  const [show, setShow] = useState(false)
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "HTML",
      completed: false
    },
    {
      id: 2,
      title: "CSS",
      completed: false
    },
    {
      id: 3,
      title: "JS",
      completed: false
    },
    {
      id: 4,
      title: "REACT",
      completed: false
    }
  ])
  const handleOpen = () => {
    setShow(!show)
  }

  const handleTextInput = (event) => {
    setNewTask(event.target.value)
  }

  const handleAdd = () => {
    setTasks((prevState)=>[...prevState, {
      id: tasks[tasks.length-1].id+1,
      title:newTask,
      completed: false
    }
    ])
  }

  const handleDelete = (id) => {
    const deleted = tasks.filter(task => task.id!= id)
    setTasks([...deleted])

  }
    const handleCancel = () => {
        setShow(false)
    }
  return (
    <div className="App">
      <button className='btn' onClick={handleOpen}>Открыть</button>
      {show &&
        <Modal
          handleOpen={handleOpen}
          handleTextInput={handleTextInput}
          handleAdd={handleAdd}
          handleCancel={handleCancel}
        />
      }
      <List
          tasks={tasks}
          handleChangeInput={handleChangeInput}
          handleDelete={handleDelete}
          handleSave={handleSave}
          handleCancel={handleCancel}
      />
    </div>
  );
}


export default App;
