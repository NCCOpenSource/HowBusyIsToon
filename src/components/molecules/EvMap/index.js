import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import ExampleData from "../../atoms/EVData/example.json";
import "./index.module.css";

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
