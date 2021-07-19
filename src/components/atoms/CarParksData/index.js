import React, { useState, useEffect } from "react";
// import CarParksData from "./carparkdata.json";



export default function CarParksData() {
  const [data, setData] = useState(CarParksData);
  console.log(
    "🚀 ~ file: carParksData.js ~ line 5 ~ CarParksData ~ data",
    data
  );

  useEffect(() => {
    fetch(
      ` https://api.newcastle.urbanobservatory.ac.uk/api/v2/sensors/entity?metric="Occupied%20spaces"&page=1`
    )
      // .then((response) => {response.json(); console.log(response)})
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
