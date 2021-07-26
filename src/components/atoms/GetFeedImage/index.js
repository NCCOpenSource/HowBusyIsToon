import React, { useEffect, useState } from "react";
import styles from "./GetFeedImage.module.css";

export default function GetFeedImage({ option }) {
  const [imageList, setImageList] = useState(null);
  const [apiFinished, setApiFinished] = useState(false);

  useEffect(() => {
    function fetchFeedImages() {
      const imageArray = [];
      fetch(
        `https://api.newcastle.urbanobservatory.ac.uk/api/v2/sensors/timeseries/685e0b8e-9c97-41df-94db-c039205814d1`
      )
        .then((response) => response.json())
        .then((response) => {
          imageArray[0] = response.latest.value;
          setImageList(imageArray);
          setApiFinished(true);
        })
        .catch((error) => {
          console.log(error);
        });

      fetch(
        "https://api.newcastle.urbanobservatory.ac.uk/api/v2/sensors/entity/239cb433-d521-4e07-a239-eff22b826342"
      )
        .then((response) => response.json())
        .then((response) => {
          imageArray[1] = response.feed[3].timeseries[0].latest.value;
          setImageList(imageArray);
        })
        .catch((error) => {
          console.log(error);
        });

      fetch(
        `https://api.newcastle.urbanobservatory.ac.uk/api/v2/sensors/timeseries/b0cf0739-8bf0-4edc-83ff-99be42d0dc21`
      )
        .then((response) => response.json())
        .then((response) => {
          imageArray[2] = response.latest.value;
          setImageList(imageArray);
        })
        .catch((error) => {
          console.log(error);
        });

      fetch(
        "https://api.newcastle.urbanobservatory.ac.uk/api/v2/sensors/feed/a9f0600c-7967-4c4a-83e1-0a37dbf7981a"
      )
        .then((response) => response.json())
        .then((response) => {
          imageArray[3] = response.timeseries[0].latest.value;
          setImageList(imageArray);
        })
        .catch((error) => {
          console.log(error);
        });

      fetch(
        "https://api.newcastle.urbanobservatory.ac.uk/api/v2/sensors/timeseries/46c43d37-9575-48f7-9688-a20664addf91"
      )
        .then((response) => response.json())
        .then((response) => {
          imageArray[4] = response.latest.value;
          setImageList(imageArray);
        })
        .catch((error) => {
          console.log(error);
        });

      fetch(
        "https://api.newcastle.urbanobservatory.ac.uk/api/v2/sensors/timeseries/36dbe148-6e59-4538-91d6-ffeea1e262a9"
      )
        .then((response) => response.json())
        .then((response) => {
          imageArray[5] = response.latest.value;
          setImageList(imageArray);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    fetchFeedImages();
  }, []);

  return (
    <>
      {imageList !== null && imageList[option] !== null && apiFinished ? (
        <img
          src={imageList[option]}
          alt="Images from street cameras of City Center"
          className={styles.image}
          width="1280"
          height="720"
        />
      ) : (
        <div className={styles.imagePlaceholder} />
      )}
    </>
  );
}
