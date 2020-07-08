import React, { Component } from 'react';

class Task extends Component {
  render() {
    const tasks = this.props.tasks;

    return (
      <div className="task-container">
        {
          tasks.map(task =>
            <div className="task" key={task.id}>
              <div className="description">{task.value}</div>
              <button onClick={() => this.props.onDelete(task.id)}>delete</button>
            </div>
          )
        }
      </div>
    );
  }
}

export default Task;