import React from 'react';

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMessage: '' };
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },

      (error) => this.setState({ errorMessage: error.message })
    );
  }

  // contentRender() {
  //   if (this.state.lat != null) {
  //     return <h1>Latitude: {this.state.lat} </h1>;
  //   } else return <h1>Error: {this.state.errorMessage} </h1>;
  // }

  render() {
    return (
      <div>
        <h1> {this.props.name} </h1>
        {/* {this.contentRender()} */}
      </div>
    );
  }
}

export default Location;
