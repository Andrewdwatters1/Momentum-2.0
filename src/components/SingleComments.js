import React from 'react';

const SingleComment = function(props) {
  console.log(props)
  return (
    <div className="red-top">
      <p>{props.content}</p>
      <p>{props.name}</p>
      <p>{props.picture}</p>
    </div>
  )
}

export default SingleComment;