import React, { Component } from 'react';
import Form from './components/Form';
import Task from './components/Task';
import Head from './components/Head';
import './css/style.css';

class App extends Component {
  state = {
    text: '',
    tasks: []
  }

  render() {
    const { tasks, text } = this.state;

    return (
      <div className="container">
        <Head />

        <Form
          text={text}
          tasks={tasks}
          addTask={this.addNewTask}
          onInputChange={this.handleChange}
        />

        <Task
          tasks={tasks}
          onDelete={this.deleteTask}
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

    if (!text) {
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
    const tasks = this.state.tasks.filter((task) => task.id !== taskId);
    this.setState({ tasks });
  }
}


export default App;
