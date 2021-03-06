import L from "leaflet";
import React from "react";
import { Marker, Popup } from "react-leaflet";
import Quiet from "../../../images/carparkicons.png";
import Unkown from "../../../images/carparkiconsBlack.png";
import Average from "../../../images/carparkiconsOrange.png";
import Busy from "../../../images/carparkiconsred.png";
import "./CarPark.css";
import styles from "./CarParkData.module.css";

export default function CarParksData({ data, option }) {
  const filteredCarPark = data
    ? data.filter((carPark) => carPark.name.includes(option))
    : null;

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
      {filteredCarPark
        ? filteredCarPark.map((carPark) =>
            carPark.occupancy ? (
              <Marker
                icon={createMarkerIcon(carPark)}
                key={carPark.id}
                position={getLatLon(carPark.name)}
              >
                <Popup className={styles.popup}>
                  <h3>{carPark.name}</h3>
                  <p>{carPark.occupancy} spaces remaining</p>
                </Popup>
              </Marker>
            ) : (
              ""
            )
          )
        : null}
      ;
    </>
  );
}
