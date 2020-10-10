import React from 'react';

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
    const { session, icon } = config['winter'];
    console.log(icon);
  }

  render() {
    if (this.state.lat != null) {
      return (
        <div>
          <h1>LifeCycle</h1>
          <h1>Latitude: {this.state.lat} </h1>
        </div>
      );
    } else
      return (
        <div>
          <h1>LifeCycle</h1>
          <h1>Error: {this.state.errorMessage} </h1>
        </div>
      );
  }
}

export default Life;
