import React, { useState, useEffect } from "react";
import CarParksData from "./carparkdata.json";

export default function CarParksData() {
  const [data, setData] = useState(CarParksData);
  console.log(
    "🚀 ~ file: carParksData.js ~ line 5 ~ CarParksData ~ data",
    data
  );

  // useEffect(() => {
  //   fetch(
  //     `https://nccfootfallparking.blob.core.windows.net/api-data/latest_car_parks.json`
  //   )
  //     // .then((response) => {response.json(); console.log(response)})
  //     .then((response) => {setData(response); console.log(response)})
  //     .catch((error) => {
  //       console.log(error);
  //     });

  // }, []);

  return <div>{data}</div>;
}
