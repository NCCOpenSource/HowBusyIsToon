import React from "react";
import { MapContainer, TileLayer, Marker, Popup,Tooltip } from "react-leaflet";
import L from "leaflet";
import "./TomTom.module.css";
import "./TomTom.css";
import BusesData from "../../atoms/BusesData";
import BusDataExample from "../../atoms/BusesData/BusDataExample.json";
import BusIcon from "../../../images/BusBirdsEye.png";
import car from "../../../assets/icons/graphic_car.svg";
import face from "../../../images/smiley-face2.jpg";
import customArrow from "../../../images/customarrow.png";
import average from "../../../images/map-marker-average.png";
import MarkerClusterGroup from "react-leaflet-markercluster";
import "leaflet/dist/leaflet.css";

// get current location optional
// rotate bus to bounding or create an arrow (https://www.npmjs.com/package/leaflet-marker-rotation)(https://codesandbox.io/s/9hrd3?file=/main.js)
// hover to find bus details or have a marker that shows bus no (show buses or just numbers)
// only show buses within distance (hook) https://leafletjs.com/reference-1.7.1.html#latlng-distanceto

export default function TomTomMap() {
  console.log("🚀 ~ file: index.js ~ line 8 ~ BusDataExample", BusDataExample);

  const customMarker = L.icon({
    iconUrl: BusIcon,
    iconSize: [33, 100],
    className: "BusIcon",
    rotationAngle: "45",
    rotationOrigin: "center",
  });

  function createMarkerIcon(bus) {
    const marker = L.divIcon({
      html: `<img alt="marker" style= 'transform: rotate(${bus.VehicleActivity.MonitoredVehicleJourney.Bearing}deg);' src="${customArrow}" /> 
<p>${bus.VehicleActivity.MonitoredVehicleJourney.LineRef}</p>`,

      iconSize: [50, 50],
      // iconAnchor: [30, 60],
      className: "busmarker",
    });
    return marker;
  }


  return (
    <MapContainer center={[54.97206769445005, -1.6132124536205563]} zoom={14}>
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      />
      {/* <MarkerClusterGroup > */}
      {BusDataExample.map((bus) => {
        if (
          bus.VehicleActivity.MonitoredVehicleJourney.VehicleLocation.Latitude <
            55.02255 &&
          bus.VehicleActivity.MonitoredVehicleJourney.VehicleLocation.Latitude >
            54.92255 &&
          bus.VehicleActivity.MonitoredVehicleJourney.VehicleLocation
            .Longitude < -1.5132124536205563 &&
          bus.VehicleActivity.MonitoredVehicleJourney.VehicleLocation
            .Longitude > -1.7132124536205563
        ) {
          return (
            <>
              <Marker
                rotationAngle={180}
                rotationOrigin={"center"}
                icon={createMarkerIcon(bus)}
                // icon={customMarker}
                rotationAngle={"45"}
                key={Math.floor(Math.random() * 999999999999)}
                position={[
                  bus.VehicleActivity.MonitoredVehicleJourney.VehicleLocation
                    .Latitude,
                  bus.VehicleActivity.MonitoredVehicleJourney.VehicleLocation
                    .Longitude,
                ]}
              ><Tooltip>{bus.VehicleActivity.MonitoredVehicleJourney.LineRef}</Tooltip>
                <Popup><h1>{bus.VehicleActivity.MonitoredVehicleJourney.LineRef}</h1>
                
                
                </Popup>
              </Marker>
            </>
          );
        }
      })}
      {/* </MarkerClusterGroup> */}
    </MapContainer>
  );
}