import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "./CarPark.css";
import styles from "./index.module.css";
import CarParksData from "../../atoms/CarParksData/carparkdata.json";
import NewCarParkData from "../../atoms/CarParksData/newCarParkData.json";
import Average from "../../../images/map-marker-average.png";
import Busy from "../../../images/map-marker-busy.png";
import Quiet from "../../../images/map-marker-quiet.png";
import Unkown from "../../../images/map-marker-unknown.png";
import StaticCarParkData from "../../atoms/CarParksData/carparkHardData.json";

function CarParksApiCall() {
  const [data, setData] = useState("");
  console.log(
    "🚀 ~ file: carParksData.js ~ line 5 ~ CarParksData ~ data",
    data
  );

  useEffect(() => {
    fetch(`https://howbusyistoon.com/ncc-car-parks.json`)
      .then((response) => {
        response.json();
        console.log(response);
      })
      .then((response) => {
        setData(response);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return data;
}

export default function CarParkMap() {
  const data = CarParksApiCall();
  console.log("🚀 ~ file: index.js ~ line 39 ~ CarParkMap ~ data", data);

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
    <MapContainer
      preferCanvas={false}
      center={[54.97206769445005, -1.6132124536205563]}
      zoom={14}
    >
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
        attribution="Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ"
      />
      {CarParksData.carparks.map((carPark) => (
        <Marker
          icon={createMarkerIcon(carPark)}
          key={Math.floor(Math.random() * 999999999999)}
          position={getLatLon(carPark.name)}
          // className="carparkmarker"
        >
          <Popup className={styles.popup}>
            <p>
              There are {carPark.occupancy} spaces available at {carPark.name}
            </p>
          </Popup>
        </Marker>
      ))}
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
    </MapContainer>
  );
}
