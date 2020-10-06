// import react lib
import React from 'react';
import ReactDOM from 'react-dom';

// Create components

// function components

const App = () => {
  const labelname = 'Label for Name';
  return (
    <div>
      {/* assign a class name */}
      <h1 className="heading">Hello function components</h1>
      {/* inline style */}
      <label htmlFor="name" style={{ backgroundColor: 'red', color: 'blue' }}>
        {/* uSed variable */}
        {labelname}
      </label>
      <input id="name" type="text" />
    </div>
  );
};

// shoe react components

ReactDOM.render(<App />, document.querySelector('#root'));
