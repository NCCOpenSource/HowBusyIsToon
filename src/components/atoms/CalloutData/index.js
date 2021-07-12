import React, { useState, useEffect } from "react";

export default function CalloutData() {
  const [data, setData] = useState("failed");
  console.log(
    "🚀 ~ file: carParksData.js ~ line 5 ~ CalloutData ~ data",
    data
  );

  useEffect(() => {
    fetch(
      `https://nccfootfallparking.blob.core.windows.net/api-data/latest_city_state.json`
    )
      .then((response) => {response.json(); console.log(response)})
      .then((response) => {setData(response); console.log(response)})
      .catch((error) => {
        console.log(error);
      });

      
  }, []);

  return <div>{data}</div>;
}
