import L from "leaflet";
import "leaflet/dist/leaflet";
import "leaflet/dist/leaflet.css";
import { set } from "lodash";
import moment from "moment";
import React, { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
} from "react-leaflet";
import blackbus from "../../../images/blackbus.png";
import greenbus from "../../../images/greenbus.png";
import orangebus from "../../../images/orangebus.png";
import redbus from "../../../images/redbus.png";
import { isWindowDefined } from "../../../utility/undefinedWindow";
import { mapOptions } from "../../../utility/variables";
import "./busMap.css";
import styles from "./BusMap.module.css";

export default function BusMap() {
  const [input, setInput] = useState("");
  const [filteredSearchBuses, setFilteredSearchBuses] = useState(null);
  useEffect(() => {
    async function callData() {
      const Response = await fetch(
        `https://buses.dev.urbanobservatory.ac.uk/vm
      `
      );

      const res = await Response.json();
      if (res.length > 1) {
        filterData(res);
      }
      return res;
    }

    callData().then((res) => {
      if (res.length > 1) {
        filterData(res);
      }
    });

    const interval = setInterval(() => {
      callData();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  function createMarkerIcon(bus, seatsavailable) {
    if (isWindowDefined) {
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
      if (seatsavailable < 0) {
        buscolor = blackbus;
      }

      let icon = L.divIcon({
        html: `<img alt="marker" style= 'transform: rotate(${bus.VehicleActivity.MonitoredVehicleJourney.Bearing}deg);' src="${buscolor}" />
              <p>${bus.VehicleActivity.MonitoredVehicleJourney.LineRef}</p>`,

        iconSize: [60, 60],
        className: "busmarker",
      });
      return icon;
    }
  }
  function filterData(data) {
    const filterExpiredBuses = data
      ? data.filter(function (bus) {
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
            let difference = moment().diff(
              moment(bus.VehicleActivity.RecordedAtTime),
              "minutes"
            );
            if (difference < 15) {
              return true;
            }
          }
        })
      : null;

    setFilteredSearchBuses(filterExpiredBuses);
  }

  const filteredBuses = filteredSearchBuses
    ? input === ""
      ? filteredSearchBuses
      : filteredSearchBuses.filter(
          (bus) => bus.VehicleActivity.MonitoredVehicleJourney.LineRef === input
        )
    : null;

  function onChange(event) {
    setInput(event.target.value);
  }

  // L.Map.addInitHook("addHandler", "gestureHandling", GestureHandling);

  return (
    <>
      <input
        className={styles.search}
        type="text"
        id="header-search"
        placeholder="Search bus number"
        name="s"
        onChange={onChange}
      />
      {isWindowDefined ? (
        <MapContainer
          center={[54.97206769445005, -1.6132124536205563]}
          zoom={14}
          className={styles.leafletcontainer}
          zoomControl={false}
          {...mapOptions}
        >
          <TileLayer
            maxZoom={19}
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          />
          <ZoomControl position="topright" />
          {filteredBuses
            ? filteredBuses.map((bus) => {
                const seatsavailable =
                  bus.VehicleActivity.Extensions.VehicleJourney.SeatedCapacity -
                  bus.VehicleActivity.Extensions.VehicleJourney.SeatedOccupancy;

                const wheelChairSeatsAvailable =
                  bus.VehicleActivity.Extensions.VehicleJourney
                    .WheelchairCapacity -
                  bus.VehicleActivity.Extensions.VehicleJourney
                    .WheelchairOccupancy;
                return (
                  <Marker
                    icon={createMarkerIcon(bus, seatsavailable)}
                    key={bus.VehicleActivity.ItemIdentifier}
                    position={[
                      bus.VehicleActivity.MonitoredVehicleJourney
                        .VehicleLocation.Latitude,
                      bus.VehicleActivity.MonitoredVehicleJourney
                        .VehicleLocation.Longitude,
                    ]}
                  >
                    <Popup className={styles.Popup}>
                      <h3>
                        Bus :{" "}
                        {bus.VehicleActivity.MonitoredVehicleJourney.LineRef}
                      </h3>
                      {seatsavailable > 0 ? (
                        <p>
                          {seatsavailable} seat
                          {seatsavailable == 1 ? " " : "s "}
                          available
                        </p>
                      ) : (
                        <p>No data on seat availability</p>
                      )}

                      {wheelChairSeatsAvailable > 0 ? (
                        <p>
                          {wheelChairSeatsAvailable} wheelchair space
                          {wheelChairSeatsAvailable == 1 ? " " : "s "}
                          available
                        </p>
                      ) : (
                        <p>No data on space availability</p>
                      )}
                      <p>
                        latest data received at{" "}
                        {moment(bus.VehicleActivity.RecordedAtTime).format(
                          " h:mm a"
                        )}
                      </p>
                    </Popup>
                  </Marker>
                );
              })
            : null}
        </MapContainer>
      ) : null}
    </>
  );
}
