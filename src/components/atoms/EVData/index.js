import React, { useEffect, useState } from "react";
import ExampleData from "./example.json";
export default function EVData() {
  const [data, setData] = useState("");
  // console.log("🚀 ~ file: index.js ~ line 5 ~ EVData ~ data", data)
  // console.log("🚀 ~ file: index.js ~ line 5 ~ EVData ~ data", data)
  // console.log("🚀 ~ file: index.js ~ line 5 ~ EVData ~ data", data)
  // console.log("🚀 ~ file: index.js ~ line 5 ~ EVData ~ data", data)
  console.log(ExampleData);
  // this is usinge
  useEffect(() => {
    function callData() {
      fetch(
        `https://chargepoints.dft.gov.uk/api/retrieve/registry/postcode/NE1+8XG/limit/10/format/json/
      `
      )
        // .then((response) => {response.json(); console.log(response)})
        // .then((response) => response.json())
        .then((response) => {
          // setData(response);
          // console.log("🚀 ~ file: index.js ~ line 29 ~ .then ~ response", response)
   
        })
        .catch((error) => {
          console.log(error);
        });
    }

    callData();
  }, []);

  return (
    <div>
      {ExampleData.ChargeDevice[0].ChargeDeviceLocation.Address.BuildingName}
    </div>
  );
}
