import React from 'react';

const ToDoItem = function (props) {
  return (
    <div className="todo-spread">
      <text className="font-size-plus-light">{props.text}</text>
      <text onMouseDown={() => props.removeItem(props.id)}><i class="fas fa-check button-light"></i></text>
    </div>
  )
}

export default ToDoItem;