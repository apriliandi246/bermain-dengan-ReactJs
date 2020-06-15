import React, { Component } from 'react';
import Form from './components/form';
import Task from './components/task';
import './css/App.css';


class App extends Component {
  constructor() {
    super();
    this.newTask = React.createRef();
  }

  state = {
    tasks: []
  }

  render() {
    return (
      <div className="container">
        <Form
          addTask={this.addNewTask}
          inputRef={this.newTask}
        />

        <Task
          onDelete={this.deleteTask}
          tasks={this.state.tasks}
        />
      </div>
    );
  }

  addNewTask = (event) => {
    event.preventDefault();

    const inputValue = this.newTask.current.value;

    if (!inputValue) {
      return;
    }

    const tasks = [...this.state.tasks];
    tasks.push({ id: Math.random(), value: inputValue.trimStart().trimEnd() });
    this.setState({ tasks });
  }

  deleteTask = (taskId) => {
    const tasks = this.state.tasks.filter(t => t.id !== taskId);
    this.setState({ tasks });
  }
}

export default App;
