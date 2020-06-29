import React from 'react';


const Task = ({ tasks, onDelete }) => {
  return (
    <div className="task-container">
      {
        tasks.map(task =>
          <div className="task" key={task.id}>
            <div className="description">{task.value}</div>
            <button onClick={() => onDelete(task.id)}>delete</button>
          </div>
        )
      }
    </div>
  );
}


export default Task;