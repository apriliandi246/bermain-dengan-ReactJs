import React, { Component } from 'react';
import Form from './components/form';
import Task from './components/task';
import './css/App.css';


class App extends Component {
  state = {
    tasks: [],
    text: ''
  }

  render() {
    const { tasks, text } = this.state;

    return (
      <div className="container">
        <Form
          onInputChange={this.handleChange}
          addTask={this.addNewTask}
          tasks={tasks}
          text={text}
        />

        <Task
          onDelete={this.deleteTask}
          tasks={tasks}
        />
      </div>
    );
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  addNewTask = (event) => {
    const { tasks, text } = this.state;

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

    this.setState({ tasks: newTasks });
    this.setState({ text: '' });
  }

  deleteTask = (taskId) => {
    const tasks = this.state.tasks.filter(t => t.id !== taskId);
    this.setState({ tasks });
  }
}


export default App;
