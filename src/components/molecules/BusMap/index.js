// import { l, divIcon, icon } from "leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet";
import "leaflet/dist/leaflet.css";
import React, { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import customArrow from "../../../images/customarrow.png";
import BusDataExample from "../../atoms/BusesData/BusDataExample.json";
import "./busMap.css";

// get current location optional
// rotate bus to bounding or create an arrow (https://www.npmjs.com/package/leaflet-marker-rotation)(https://codesandbox.io/s/9hrd3?file=/main.js)
// hover to find bus details or have a marker that shows bus no (show buses or just numbers)
// only show buses within distance (hook) https://leafletjs.com/reference-1.7.1.html#latlng-distanceto

export default function BusMap() {
  const [input, setInput] = useState("3");
  // console.log("🚀 ~ file: index.js ~ line 8 ~ BusDataExample", BusDataExample);

  // if (typeof window !== 'undefined') {

  // const customMarker = icon({
  //   iconUrl: BusIcon,
  //   iconSize: [33, 100],
  //   className: "BusIcon",
  //   rotationAngle: "45",
  //   rotationOrigin: "center",
  // });
  // }

  function createMarkerIcon(bus) {
    if (typeof window !== "undefined") {
      let icon = L.divIcon({
        html: `<img alt="marker" style= 'transform: rotate(${bus.VehicleActivity.MonitoredVehicleJourney.Bearing}deg);' src="${customArrow}" />
  <p>${bus.VehicleActivity.MonitoredVehicleJourney.LineRef}</p>`,

        iconSize: [50, 50],
        // iconAnchor: [30, 60],
        className: "busmarker",
      });
      return icon;
    }
  }

  const filteredBuses = BusDataExample.filter((bus) =>
    bus.VehicleActivity.MonitoredVehicleJourney.LineRef.includes(input)
  );
  // console.log(
  //   "🚀 ~ file: index.js ~ line 49 ~ BusMap ~ filteredBuses",
  //   filteredBuses
  // );

  function onChange(event) {
    setInput(event.target.value);
  }

  return (
    <>
      <input
        type="text"
        id="header-search"
        placeholder="Search bus number"
        name="s"
        onChange={onChange}
      />
      {typeof window !== "undefined" ? (
        <MapContainer
          center={[54.97206769445005, -1.6132124536205563]}
          zoom={14}
        >
          {" "}
          <TileLayer
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          />
          {filteredBuses.map((bus) => {
            const seatsavailable =
              bus.VehicleActivity.Extensions.VehicleJourney.SeatedCapacity -
              bus.VehicleActivity.Extensions.VehicleJourney.SeatedOccupancy;

            const WheelChaireseatsavailable =
              bus.VehicleActivity.Extensions.VehicleJourney.WheelchairCapacity -
              bus.VehicleActivity.Extensions.VehicleJourney.WheelchairOccupancy;

            if (
              bus.VehicleActivity.MonitoredVehicleJourney.VehicleLocation
                .Latitude < 55.02255 &&
              bus.VehicleActivity.MonitoredVehicleJourney.VehicleLocation
                .Latitude > 54.92255 &&
              bus.VehicleActivity.MonitoredVehicleJourney.VehicleLocation
                .Longitude < -1.5132124536205563 &&
              bus.VehicleActivity.MonitoredVehicleJourney.VehicleLocation
                .Longitude > -1.7132124536205563
            ) {
              return (
                <Marker
                  rotationAngle={180}
                  rotationOrigin={"center"}
                  icon={createMarkerIcon(bus)}
                  rotationAngle={"45"}
                  key={Math.floor(Math.random() * 999999999999)}
                  position={[
                    bus.VehicleActivity.MonitoredVehicleJourney.VehicleLocation
                      .Latitude,
                    bus.VehicleActivity.MonitoredVehicleJourney.VehicleLocation
                      .Longitude,
                  ]}
                >
                  {/* <Tooltip>
                  {bus.VehicleActivity.MonitoredVehicleJourney.LineRef}
                </Tooltip> */}
                  <Popup>
                    <h1>
                      Bus :{" "}
                      {bus.VehicleActivity.MonitoredVehicleJourney.LineRef}
                    </h1>
                    {seatsavailable ? (
                      <h2>{seatsavailable} seats available</h2>
                    ) : (
                      ""
                    )}

                    {WheelChaireseatsavailable ? (
                      <h2>
                        {WheelChaireseatsavailable} wheelchair seats available
                      </h2>
                    ) : (
                      ""
                    )}
                  </Popup>
                </Marker>
              );
            }
          })}
          {/* </MarkerClusterGroup> */}
        </MapContainer>
      ) : null}
    </>
  );
}
