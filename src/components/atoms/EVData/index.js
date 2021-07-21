import React, { useEffect, useState } from "react";
import ExampleData from "./example.json";
import { Marker, Popup } from "react-leaflet";

export default function EVData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    function callData() {
      fetch(
        `https://chargepoints.dft.gov.uk/api/retrieve/registry/postcode/NE1+8XG/limit/10/format/json/
      `
      )
        // .then((response) => {response.json(); console.log(response)})
        // .then((response) => response.json())
        .then((response) => {
          setData(response);
          // console.log("🚀 ~ file: index.js ~ line 29 ~ .then ~ response", response)
        })
        .catch((error) => {
          setData(ExampleData);

          console.log(error);
        });

    }

    callData();
  }, []);

  return (
    <div>
      {data
        ? data.ChargeDevice.map((ChargeDevice) => (
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
                  <p>
                    {ChargeDevice.Accessible24Hours
                      ? "Open 24/7"
                      : "Check Website For Opening Hours"}
                  </p>
                  <a href={ChargeDevice.DeviceOwner.Website}>
                    {ChargeDevice.DeviceOwner.Website}
                  </a>
                </Popup>
              </Marker>
            </>
          ))
        : null}
    </div>
  );
}
