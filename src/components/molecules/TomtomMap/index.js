import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import L from "leaflet";
import "./TomTom.module.css";
import "./TomTom.css";
import "leaflet/dist/leaflet.css";

export default function TomTomMap() {
  return (
    <MapContainer
      center={[54.97206769445005, -1.6132124536205563]}
      dragging={false}
      zoom={14}
    >
      {/* <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      /> */}
      {/* <TileLayer url="https://api.tomtom.com​/traffic​/map​/4/tile​/flow/relative//{z}/{x}/{y}.png?key=4reGC4228TDTf8xCIWiZ4gDAKA4Py8ui" /> */}

      <TileLayer url="https://1.traffic.maps.ls.hereapi.com/maptile/2.1/traffictile/newest/normal.day/{z}/{x}/{y}/256/png8?apiKey=3CP-7K_lqYHxoRwAZRF9sJYtndTSDvpFBCygz6FxVAI" />
    </MapContainer>
  );
}
