import React, { Component } from 'react';
import Form from './components/form';
import Task from './components/task';
import './css/App.css';


class App extends Component {
  constructor() {
    super()
    this.newTask = React.createRef()
  }

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
          inputRef={this.newTask}
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
    event.preventDefault();

    const inputValue = this.newTask.current.value;

    if (!inputValue) {
      alert("type something...");
      return;
    }

    if (inputValue.length > 500) {
      alert("must be less than 500 characters...");
      return;
    }

    const tasks = [...this.state.tasks];
    tasks.push({ id: Date.now(), value: inputValue.trimStart().trimEnd() });

    this.setState({ tasks });
    this.setState({ text: '' });
  }

  deleteTask = (taskId) => {
    const tasks = this.state.tasks.filter(t => t.id !== taskId);
    this.setState({ tasks });
  }
}


export default App;
