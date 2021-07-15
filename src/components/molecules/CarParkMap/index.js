import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import "./index.module.css";
import CarParksData from "../../atoms/CarParksData/carparkdata.json";
export default function CarParkMap() {
  console.log("🚀 ~ file: index.js ~ line 5 ~ CarParksData", CarParksData);

  function getLatLon(carParkName) {
    if (carParkName === "Eldon Square")
      return [54.97606277765559, -1.6153922618257768];
    if (carParkName === "Claremont Road")
      return [54.98239950990115, -1.617765634963382];
    if (carParkName === "Dean Street")
      return [54.97029586400192, -1.6092526293900549];
    if (carParkName === "Eldon Garden")
      return [54.97595271085387, -1.6164735647720887];
    if (carParkName === "Ellison Place")
      return [54.97602915540869, -1.6082014049543143];
    if (carParkName === "Grainger Town")
      return [54.96944396927636, -1.6213144796203964];
    if (carParkName === "Manors")
      return [54.97269238272554, -1.6062653286128759];
  }

  function createMarkerIcon(carPark) {
    const marker = L.divIcon({
      // html:
      //   '<img alt="marker-' +
      //   state +
      //   '" src="assets/images/map-marker-' +
      //   state +
      //   '.png"><span class="spaces">' +
      //   spaces +
      //   "</span>",
      // iconSize: [60, 60],
      // iconAnchor: [30, 60],
      // className: "car-park-marker",
    });
    return marker;
  }
  return (
    <MapContainer center={[54.97206769445005, -1.6132124536205563]} zoom={14}>
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
        attribution="Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ"
      />

      {CarParksData.carparks.map((carPark) => (
        <Marker
          icon={createMarkerIcon(carPark)}
          key={Math.floor(Math.random() * 999999999999)}
          position={getLatLon(carPark.name)}
        >
          <p>100</p>
          <Popup>
            <p>100</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
