import React, { Component } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "./leafletmap.css";
export default class MyMap extends Component {
  render() {
    const { options } = this.props;

    if (typeof window !== "undefined") {
      return (
        <MapContainer center={[54.97206769445005, -1.6132124536205563]} zoom={14}>
          <TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* <Marker>
            <Popup></Popup>
          </Marker> */}
        </MapContainer>
      );
    }
    return null;
  }
}
