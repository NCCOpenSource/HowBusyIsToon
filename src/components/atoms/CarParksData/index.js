import L from "leaflet";
import React, { useEffect, useState } from "react";
import { Marker, Popup } from "react-leaflet";
import Average from "../../../images/map-marker-average.png";
import Busy from "../../../images/map-marker-busy.png";
import Quiet from "../../../images/map-marker-quiet.png";
import Unkown from "../../../images/map-marker-unknown.png";
import CarParkExampleData from "./carparkdata.json";
import styles from "./CarParkData.module.css";
import StaticCarParkData from "./carparkHardData.json";
export default function CarParksData() {
  const [data, setData] = useState(null);
  console.log(
    "🚀 ~ file: carParksData.js ~ line 5 ~ CarParksData ~ data",
    data
  );
  console.log("testingApi");
  useEffect(() => {
    fetch(`https://howbusyistoon.com/ncc-car-parks.json`)
      .then((response) => {
        response.json();
        console.log(response);
      })
      .then((response) => {
        setData(response);
        console.log(
          "🚀 ~ file: index.js ~ line 26 ~ .then ~ response",
          response
        );
        setData(CarParkExampleData);

        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
    let icon = Unkown;
    let state = carPark.state;
    if (state === "busy") {
      icon = Busy;
    }
    if (state === "average") {
      icon = Average;
    }
    if (state === "quiet") {
      icon = Quiet;
    }
    // const spaces = carpark.capacity - carpark.occupancy;
    let spaces = carPark.occupancy;
    if (carPark.occupancy === undefined) {
      spaces = "";
    }
    const marker = L.divIcon({
      html:
        '<img alt="marker-' +
        state +
        '" src="' +
        `${icon}` +
        '"><span className=' +
        `${styles.spaces}` +
        ">" +
        spaces +
        "</span>",
      iconSize: [60, 60],
      iconAnchor: [30, 60],
      className: "carparkmarker",
    });
    return marker;
  }

  return (
    <>
      {data
        ? data.carparks.map((carPark) => (
            <Marker
              icon={createMarkerIcon(carPark)}
              key={Math.floor(Math.random() * 999999999999)}
              position={getLatLon(carPark.name)}
              // className="carparkmarker"
            >
              <Popup className={styles.popup}>
                <p>
                  There are {carPark.occupancy} spaces available at{" "}
                  {carPark.name}
                </p>
              </Popup>
            </Marker>
          ))
        : null}
      {StaticCarParkData.map((carPark) => (
        <Marker
          icon={createMarkerIcon(carPark)}
          key={Math.floor(Math.random() * 999999999999)}
          position={carPark.location}
          // className="carparkmarker"
        >
          <Popup className={styles.popup}>
            <p>
              There are {carPark.capacity} potential spaces available at{" "}
              {carPark.name}
            </p>
          </Popup>
        </Marker>
      ))}
      ;
    </>
  );
}
