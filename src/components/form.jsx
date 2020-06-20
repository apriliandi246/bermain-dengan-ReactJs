import React, { Component } from 'react';
import '../css/form.css';


class Form extends Component {
  render() {
    const { addTask, inputRef, button, tasks, text, onInputChange } = this.props;

    return (
      <div className="form-container">
        <form onSubmit={addTask}>
          <input type="text" onChange={onInputChange} ref={inputRef} value={text} placeholder="new task..." autoFocus />
          <button type="submit" ref={button}>add #{tasks.length + 1}</button>
        </form>
      </div>
    );
  }
}


export default Form;