import React from 'react';

const ToDoItem = function (props) {
  return (
    <div>
      {props.text}
      <text onMouseDown={() => props.removeItem(props.id)}>✅</text>
    </div>
  )
}

export default ToDoItem;