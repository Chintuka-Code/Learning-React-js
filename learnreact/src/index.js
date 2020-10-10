// import react lib
import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './comment';
import Approval from './approval';
// import Location from './Geolocation';
import Life from './LifeCycle';
// Create components

// function components

const App = () => {
  // const labelname = 'Label for Name';
  return (
    // <div>
    //   {/* assign a class name */}
    //   <h1 className="heading">Hello function components</h1>

    //   {/* inline style */}
    //   <label htmlFor="name" style={{ backgroundColor: 'red', color: 'blue' }}>
    //     {/* uSed variable */}
    //     {labelname}
    //   </label>

    //   <input id="name" type="text" />
    // </div>
    <div>
      <h1>My first React Components With Props</h1>

      <Approval>
        <Comment author="sabban" time="4.00" color="red" />
      </Approval>

      <Approval>
        <Comment author="Dj" time="5.00" color="green" />
      </Approval>

      <Approval>
        <Comment author="Jd" time="6.00" color="yellow" />
      </Approval>

      <Approval>
        <Comment author="Shubham" time="7.00" color="blue" />
      </Approval>

      {/* <Location/> */}
      <Life />
    </div>
  );
};

// show react components

ReactDOM.render(<App />, document.querySelector('#root'));
