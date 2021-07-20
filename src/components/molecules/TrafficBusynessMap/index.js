import "leaflet/dist/leaflet.css";
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "./TrafficBusynessMap.module.css";

export default function TrafficBusynessMap() {
  return (
    <MapContainer
      center={[54.97206769445005, -1.6132124536205563]}
      // dragging={false}
      zoom={14}
    >
      <TileLayer url="https://1.traffic.maps.ls.hereapi.com/maptile/2.1/traffictile/newest/normal.day/{z}/{x}/{y}/256/png8?apiKey=TAmatMaYdkft_c4JrXzxjt1dZ-rRUtx5BcqRWNMB7bc" />
    </MapContainer>
  );
}
