import React, { useState } from 'react';
import Form from './components/Form';
import Task from './components/Task';
import Head from './components/Head';
import './css/style.css';


const App = () => {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const addNewTask = (event) => {
    event.preventDefault();

    if (text === '') {
      alert("type something...");
      return;
    }

    if (text.length > 500) {
      alert("must be less than 500 characters...");
      return;
    }

    const newTasks = [...tasks];
    newTasks.push({ id: Date.now(), value: text.trimStart().trimEnd() });

    setText('');
    setTasks(newTasks);
  }

  const deleteTask = (taskId) => {
    const restOfTask = tasks.filter(t => t.id !== taskId);
    setTasks(restOfTask);
  }

  return (
    <div className="container">
      <Head />

      <Form
        text={text}
        tasks={tasks}
        addTask={addNewTask}
        onInputChange={handleChange}
      />

      <Task
        tasks={tasks}
        onDelete={deleteTask}
      />
    </div>
  );
}


export default App;
