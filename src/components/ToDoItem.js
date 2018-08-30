import React from 'react';

const ToDoItem = function (props) {
  return (
    <div className="todo-spread">
      <text className="font-size-plus-light">{props.text}</text>
      <text onMouseDown={() => props.removeItem(props.id)}><button className="font-size-light">button</button></text>
    </div>
  )
}

export default ToDoItem;