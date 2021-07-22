import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import EVData from "../../atoms/EVData";
import ExampleData from "../../atoms/EVData/example.json";
import "./index.module.css";
import styles from "./index.module.css";
export default function EvMap() {
  console.log("🚀 ~ file: index.js ~ line 5 ~ ExampleData", ExampleData);

  return (
    <MapContainer
      center={[54.97206769445005, -1.6132124536205563]}
      zoom={14}
      className={styles.leafletcontainer}
    >
      <TileLayer
        maxZoom={19}
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      />

      <EVData />
    </MapContainer>
  );
}
