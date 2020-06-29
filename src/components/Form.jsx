import React from 'react';


const Form = ({ addTask, tasks, text, onInputChange }) => {
  return (
    <div className="form-container">
      <form onSubmit={addTask}>
        <input type="text" onChange={onInputChange} value={text} placeholder="new task..." autoFocus />
        <button type="submit">add #{tasks.length + 1}</button>
      </form>
    </div>
  );
}


export default Form;