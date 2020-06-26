import React, { Component } from 'react';


class Form extends Component {
  render() {
    const { addTask, tasks, text, onInputChange } = this.props;

    return (
      <div className="form-container">
        <form onSubmit={addTask}>
          <input type="text" onChange={onInputChange} value={text} placeholder="new task..." autoFocus />
          <button type="submit">add #{tasks.length + 1}</button>
        </form>
      </div>
    );
  }
}


export default Form;