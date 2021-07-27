import L from "leaflet";
import React, { useEffect, useState } from "react";
import { Marker, Popup } from "react-leaflet";
import Quiet from "../../../images/carparkicons.png";
import Unkown from "../../../images/carparkiconsBlack.png";
import Average from "../../../images/carparkiconsOrange.png";
import Busy from "../../../images/carparkiconsred.png";
import "./CarPark.css";
import CarParkExampleData from "./carparkdata.json";
import styles from "./CarParkData.module.css";
import StaticCarParkData from "./carparkHardData.json";

export default function CarParksData() {
  const [data, setData] = useState(null);

  console.log("testingApi");
  useEffect(() => {
    fetch(`https://howbusyistoon.com/ncc-car-parks.json`)
      .then((response) => {
        response.json();
      })
      .then((response) => {
        setData(response);
        setData(CarParkExampleData);
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
        '"><p ' +
        ">" +
        spaces +
        "</p>",
      iconSize: [35, 35],
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
                <h1>{carPark.name}</h1>
                <p>{carPark.occupancy} spaces remaining</p>
              </Popup>
            </Marker>
          ))
        : null}
      {StaticCarParkData.map((carPark) => (
        <Marker
          icon={createMarkerIcon(carPark)}
          key={Math.floor(Math.random() * 999999999999)}
          position={carPark.location}
        >
          <Popup className={styles.popup}>
            <h1>{carPark.name}</h1>

            <p>There are {carPark.capacity} potential spaces available</p>
          </Popup>
        </Marker>
      ))}
      ;
    </>
  );
}
