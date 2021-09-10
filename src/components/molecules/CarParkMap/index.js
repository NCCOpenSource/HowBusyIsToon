import L from "leaflet";
import { GestureHandling } from "leaflet-gesture-handling";
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { mapOptions } from "../../../utility/variables";
import CarParksData from "../../atoms/CarParksData";
import styles from "./index.module.css";

export default function CarParkMap({ data, option }) {
  L.Map.addInitHook("addHandler", "gestureHandling", GestureHandling);

  return (
    <MapContainer
      preferCanvas={false}
      center={[54.97206769445005, -1.6132124536205563]}
      zoom={14}
      className={styles.leafletcontainer}
      {...mapOptions}
    >
      <TileLayer
        maxZoom={19}
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      />
      <CarParksData data={data} option={option} />
    </MapContainer>
  );
}
