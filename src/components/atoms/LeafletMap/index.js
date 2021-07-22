import React, { Component } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "./leafletmap.css";
import styles from "./leafletmap.css";
export default class MyMap extends Component {
  render() {
    const { options } = this.props;

    if (typeof window !== "undefined") {
      return (
        <MapContainer
          center={[54.97206769445005, -1.6132124536205563]}
          zoom={14}
          className={styles.leafletcontainer}
        >
          <TileLayer
            maxZoom={16}
            url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
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
