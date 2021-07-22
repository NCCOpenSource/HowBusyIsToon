// import { l, divIcon, icon } from "leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet";
import "leaflet/dist/leaflet.css";
import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import blackbus from "../../../images/blackbus.png";
import greenbus from "../../../images/greenbus.png";
import orangebus from "../../../images/orangebus.png";
import redbus from "../../../images/redbus.png";
import "./busMap.css";
import styles from "./BusMap.module.css";

export default function BusMap() {
  // ? to reduce data on first sight
  // const [input, setInput] = useState(String(Math.floor(Math.random() * 10)));
  const [input, setInput] = useState('');
  const [data, setData] = useState(null);
  useEffect(() => {
    callData();
    function callData() {
      fetch(
        `https://buses.dev.urbanobservatory.ac.uk/vm
      `
      )
        // .then((response) => {response.json(); console.log(response)})
        .then((response) => response.json())
        .then((response) => {
          setData(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    const interval = setInterval(() => {
      callData();
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  // ? alternative icon too cool to delete

  // if (typeof window !== 'undefined') {

  // const customMarker = icon({
  //   iconUrl: BusIcon,
  //   iconSize: [33, 100],
  //   className: "BusIcon",
  //   rotationAngle: "45",
  //   rotationOrigin: "center",
  // });
  // }

  function createMarkerIcon(bus, seatsavailable) {
    if (typeof window !== "undefined") {
      let buscolor = blackbus;
      if (seatsavailable < 5) {
        buscolor = redbus;
      }
      if (seatsavailable > 5) {
        buscolor = orangebus;
      }

      if (seatsavailable > 20) {
        buscolor = greenbus;
      }

      let icon = L.divIcon({
        html: `<img alt="marker" style= 'transform: rotate(${bus.VehicleActivity.MonitoredVehicleJourney.Bearing}deg);' src="${buscolor}" />
              <p>${bus.VehicleActivity.MonitoredVehicleJourney.LineRef}</p>`,

        iconSize: [60, 60],
        // iconAnchor: [30, 60],
        className: "busmarker",
      });
      return icon;
    }
  }

  const filteredBuses = data
    ? data.filter((bus) =>
        bus.VehicleActivity.MonitoredVehicleJourney.LineRef.includes(input)
      )
    : null;

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
          className={styles.leafletcontainer}
        >
          <TileLayer
            maxZoom={19}
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          />
          {data
            ? filteredBuses.map((bus) => {
                const seatsavailable =
                  bus.VehicleActivity.Extensions.VehicleJourney.SeatedCapacity -
                  bus.VehicleActivity.Extensions.VehicleJourney.SeatedOccupancy;

                const WheelChaireseatsavailable =
                  bus.VehicleActivity.Extensions.VehicleJourney
                    .WheelchairCapacity -
                  bus.VehicleActivity.Extensions.VehicleJourney
                    .WheelchairOccupancy;

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
                      icon={createMarkerIcon(bus, seatsavailable)}
                      rotationAngle={"45"}
                      key={Math.floor(Math.random() * 999999999999)}
                      position={[
                        bus.VehicleActivity.MonitoredVehicleJourney
                          .VehicleLocation.Latitude,
                        bus.VehicleActivity.MonitoredVehicleJourney
                          .VehicleLocation.Longitude,
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
                            {WheelChaireseatsavailable} wheelchair seats
                            available
                          </h2>
                        ) : (
                          ""
                        )}
                      </Popup>
                    </Marker>
                  );
                }
              })
            : null}
        </MapContainer>
      ) : null}
    </>
  );
}
