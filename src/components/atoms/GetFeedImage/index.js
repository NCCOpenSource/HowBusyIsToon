import React, { useEffect, useState } from "react";

export default function GetFeedImage() {
  const [camera1, setCamera1] = useState(['']);
  const [camera2, setCamera2] = useState(['']);
  const [camera3, setCamera3] = useState(['']);
  const [camera4, setCamera4] = useState(['']);


  useEffect(() => {
    fetch(
      `https://api.newcastle.urbanobservatory.ac.uk/api/v2/sensors/timeseries/b0cf0739-8bf0-4edc-83ff-99be42d0dc21`
    )
      .then((response) => setCamera1(response))

      .catch((error) => {
        console.log(error);
      });
    fetch(
      `https://api.newcastle.urbanobservatory.ac.uk/api/v2/sensors/timeseries/685e0b8e-9c97-41df-94db-c039205814d1`
    )
      .then((response) => setCamera2(response))

      .catch((error) => {
        console.log(error);
      });
    fetch(
      `https://api.newcastle.urbanobservatory.ac.uk/api/v2/sensors/timeseries/b0cf0739-8bf0-4edc-83ff-99be42d0dc21`
    )
      .then((response) => setCamera3(response))

      .catch((error) => {
        console.log(error);
      });
    fetch(
      `https://api.newcastle.urbanobservatory.ac.uk/api/v2/sensors/timeseries/b0cf0739-8bf0-4edc-83ff-99be42d0dc21`
    )
      .then((response) => setCamera4(response))

      .catch((error) => {
        console.log(error);
      });
  }, []);



 

  return (
    <div>
        <div>{camera1.url}</div>
        <div>{camera2.url}</div>
        <div>{camera3.url}</div>
        <div>{camera4.url}</div>
    </div>
  );
}
