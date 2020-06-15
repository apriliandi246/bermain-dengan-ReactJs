import React, { Component } from 'react';
import '../css/form.css';

class Form extends Component {
   render() {
      return (
         <div className="form-container">
            <form onSubmit={this.props.addTask}>
               <input type="text" placeholder="new task..." ref={this.props.inputRef} />
               <button type="submit">Add</button>
            </form>
         </div>
      );
   }
}

export default Form;