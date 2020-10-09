import React from 'react';

const Comment = (props) => {
  return (
    <div style={{ color: `${props.color}` }}>
      <h1>Hello comment</h1>
      <h3>Time:- {props.author} </h3>
      <h3>Author:- {props.time}</h3>
    </div>
  );
};

export default Comment;
