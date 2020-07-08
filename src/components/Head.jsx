import React, { Component } from 'react';
import TodoImage from '../assets/images/todo.jpg';

class Head extends Component {
   render() {
      return (
         <div className="head">
            <img src={TodoImage} alt="todo" />
         </div>
      );
   }
}

export default Head;