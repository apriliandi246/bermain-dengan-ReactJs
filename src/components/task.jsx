import React, { Component } from 'react';
import '../css/task.css';

class Task extends Component {
   render() {
      const data = this.props.tasks;

      return (
         <div className="task-container">
            {
               data.map(t =>
                  <div key={t.id}>
                     <span>{t.value}</span>
                     <button onClick={() => this.props.onDelete(t.id)}>delete</button>
                  </div>
               )
            }
         </div>
      );
   }
}

export default Task;