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

// Set Default Props

Comment.defaultProps = {
  author: 'sabban',
  time: '4.00',
  color: 'red',
};

export default Comment;
