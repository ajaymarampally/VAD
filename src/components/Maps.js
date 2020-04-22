import React, { Component } from 'react';
import {Map,GoogleApiWrapper,InfoWindow,Marker} from 'google-maps-react';
import maps from "./css/maps.css";

const mapStyles = {
    width: '600px',
    height: '600px'
  };

class Maps extends Component{
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      lat1 : 12.844224172851805,
      lng1 : 80.15280599937732

    }

    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  } 
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  } 
  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }
    render(){

        return(
          <div className ={maps.main} >
            <p>
              The current location of the device is lat :{this.state.lat1} ,lng : {this.state.lng1}
            </p>

          <hr style={{marginTop:"20px",marginBottom:"20px"}}/>
          <Map
            google={this.props.google}
            zoom={11}
            styles={mapStyles}
            initialCenter={{
            lat: this.state.lat1,
            lng: this.state.lng1
          }}
          >
          <Marker
          onClick = { this.onMarkerClick }
          title = { 'Vehicle Location' }
          position = {{ lat: this.state.lat1, lng: this.state.lng1 }}
          name = { 'Vehicle Location' }
        />
        <InfoWindow
          marker = { this.state.activeMarker }
          visible = { this.state.showingInfoWindow }
        ></InfoWindow>
        </Map>
        </div> 
      );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AAIzaSyAalq3nxwmS1q1Ejqf1n_D1LVfER54j8AAA'
  })(Maps);
