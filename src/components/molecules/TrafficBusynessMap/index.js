import L from "leaflet";
import { GestureHandling } from "leaflet-gesture-handling";
import "leaflet/dist/leaflet.css";
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { isWindowDefined } from "../../../utility/undefinedWindow";
import styles from "./TrafficBusynessMap.module.css";

export default function TrafficBusynessMap() {
  L.Map.addInitHook("addHandler", "gestureHandling", GestureHandling);
  if (isWindowDefined) {
    var mapOptions = {
      // attributionControl: false,
      gestureHandling: true,
      // dragging: !L.Browser.mobile,
      // tap: !L.Browser.mobile,
      gestureHandlingOptions: {
        text: {
          touch: "Hey bro, use two fingers to move the map",
          scroll: "Hey bro, use ctrl + scroll to zoom the map",
          scrollMac: "Hey bro, use \u2318 + scroll to zoom the map",
        },
      },
    };
  }
  return (
    <MapContainer
      center={[54.97206769445005, -1.6132124536205563]}
      // dragging={false}
      zoom={14}
      className={styles.leafletcontainer}
      {...mapOptions}
    >
      <TileLayer url="https://1.traffic.maps.ls.hereapi.com/maptile/2.1/traffictile/newest/normal.day/{z}/{x}/{y}/256/png8?apiKey=TAmatMaYdkft_c4JrXzxjt1dZ-rRUtx5BcqRWNMB7bc" />
    </MapContainer>
  );
}
