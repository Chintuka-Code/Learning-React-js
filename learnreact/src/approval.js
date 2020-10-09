import React from 'react';

const Approval = (props) => {
  return (
    <div>
      <h1>Approval Component</h1>
      <div>{props.children}</div>
      <button>Approve</button>
    </div>
  );
};

export default Approval;
