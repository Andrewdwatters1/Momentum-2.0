import React from 'react';

const ToDoItem = function (props) {
  return (
    <div>
      {props.text}
      <button onClick={() => props.removeItem(props.id)}>'checkmark'</button>
    </div>
  )
}

export default ToDoItem;