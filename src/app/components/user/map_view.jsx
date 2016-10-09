import React, { Component } from 'react';
import GoogleMap from 'google-map-react';

export default class MapView extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-sm-8">
          Map
          <GoogleMap />
        </div>
        <div className="col-sm-4">
          List
        </div>
      </div>
    )
  }
}
