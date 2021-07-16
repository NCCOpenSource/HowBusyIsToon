import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "./BusMap.module.css";

import BusesData from "../../atoms/BusesData";
import BusDataExample from "../../atoms/BusesData/BusDataExample.json";
import BusIcon from "../../../images/BusBirdsEye.png";
import car from "../../../assets/icons/graphic_car.svg";
import face from "../../../images/smiley-face2.jpg";

// get current location optional
// rotate bus to bounding or create an arrow (https://www.npmjs.com/package/leaflet-marker-rotation)(https://codesandbox.io/s/9hrd3?file=/main.js)
// hover to find bus details or have a marker that shows bus no (show buses or just numbers)
// only show buses within distance (hook) https://leafletjs.com/reference-1.7.1.html#latlng-distanceto

export default function BusMap() {
  // console.log("🚀 ~ file: index.js ~ line 6 ~ BusesData", BusDataExample);

  // delete L.Icon.Default.prototype._getIconUrl;

  // L.Icon.Default.mergeOptions({
  //   iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  //   iconUrl: require("leaflet/dist/images/marker-icon.png"),
  //   shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  // });
  // console.log(Marker);

  // const customMarker = L.divIcon({
  //   html:
  //     '<img alt="marker" src="' +
  //     `${BusIcon}` >",
  //   iconSize: [60, 60],
  //   iconAnchor: [30, 60],
  //   className: "carparkmarker",
  // });

  // L.rotatedMarker([48.8631169, 2.3708919], {
  //   rotationAngle: 45,
  // })
  // var customMarker = L.RotatedMarker({
  //   iconUrl: BusIcon,
  //   iconSize: [33, 100],
  //   rotationAngle: 145,
  //   rotationOrigin: "bottom center",
  // });
  // const

  const customMarker = L.icon({
    iconUrl: BusIcon,
    iconSize: [33, 100],
    className: "BusIcon",
    rotationAngle: "45",
    rotationOrigin: "center",
  });


  return (
    <MapContainer center={[54.97206769445005, -1.6132124536205563]} zoom={14}>
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
        attribution="Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ"
      />

      {BusDataExample.map((bus) => (
        <>
          <Marker
            rotationAngle={180}
            rotationOrigin={"center"}
            icon={customMarker}
            rotationAngle={"45"}
            key={Math.floor(Math.random() * 999999999999)}
            position={[
              bus.VehicleActivity.MonitoredVehicleJourney.VehicleLocation
                .Latitude,
              bus.VehicleActivity.MonitoredVehicleJourney.VehicleLocation
                .Longitude,
            ]}
          >
            <Popup></Popup>
          </Marker>
        </>
      ))}
    </MapContainer>
  );
}
