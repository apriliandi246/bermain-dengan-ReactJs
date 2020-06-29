import React from 'react';
import TodoImage from '../assets/images/todo.jpg';


const Head = () => {
   return (
      <div className="head">
         <img src={TodoImage} alt="todo" />
      </div>
   );
}


export default Head;