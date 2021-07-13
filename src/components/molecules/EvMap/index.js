import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./index.module.css";
import ExampleData from "../../atoms/EVData/example.json";

export default function EvMap() {
  console.log("🚀 ~ file: index.js ~ line 5 ~ ExampleData", ExampleData);

  return (
    <MapContainer center={[54.97206769445005, -1.6132124536205563]} zoom={14}>
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
        attribution='Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ'
      />

      {ExampleData.ChargeDevice.map((ChargeDevice) => (
        <>
          <Marker
            key={Math.floor(Math.random() * 999999999999)}
            position={[
              ChargeDevice.ChargeDeviceLocation.Latitude,
              ChargeDevice.ChargeDeviceLocation.Longitude,
            ]}
          >
            <Popup>
              <p>{ChargeDevice.OrganisationName}</p>
              <p>{ChargeDevice.ChargeDeviceName}</p>
              {/* <p>{ChargeDevice.ChargeDeviceStatus}</p> */}
              {ChargeDevice.Connector.map((connnector) => (
                <>
                  <p>{connnector.ConnectorType}</p>
                  <p>{connnector.RatedOutputkW}kW</p>
                </>
              ))}
              <p>{ChargeDevice.Accessible24Hours ? 'Open 24/7': 'Check Website For Opening Hours'}</p>
              <a href={ChargeDevice.DeviceOwner.Website}>{ChargeDevice.DeviceOwner.Website}</a>
            </Popup>
          </Marker>
        </>
      ))}
    </MapContainer>
  );
}
