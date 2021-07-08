import React, { useState, useEffect } from "react";

export default function CarParksData() {
  const [data, setData] = useState('failed');
  console.log("🚀 ~ file: carParksData.js ~ line 5 ~ CarParksData ~ data", data)

  useEffect(() => {
    fetch(
      `https://nccfootfallparking.blob.core.windows.net/api-data/latest_car_parks.json`
    )
      .then((response) => setData(response))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <div>{data}</div>;
}
