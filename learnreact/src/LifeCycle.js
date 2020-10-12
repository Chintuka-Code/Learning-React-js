import React from 'react';
import './index.css';
const config = {
  winter: { sess: 'winter', icon: 'win' },
  summer: { sess: 'summer', icon: 'summer' },
};

class Life extends React.Component {
  // Another way to define State
  state = { lat: null, errorMeassage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (error) => this.setState({ errorMessage: error.message })
    );
    // access a object in diffrent way
    const { sess, icon } = config['winter']; // access object
    console.log(icon + sess);
  }

  // Avoid Conditional Render
  helper() {
    if (this.state.lat != null) {
      return <h1>Latitude: {this.state.lat} </h1>;
    } else return <h1>Error: {this.state.errorMessage} </h1>;
  }

  render() {
    return (
      <div>
        <h1>Life Cycle</h1>
        {this.helper()}
      </div>
    );
  }
}

export default Life;
