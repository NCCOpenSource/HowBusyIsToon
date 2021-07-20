import React, { useEffect, useState } from "react";
import styles from "./GetFeedImage.module.css";
export default function GetFeedImage({ option }) {
  const [imageList, setImageList] = useState(null);

  useEffect(() => {
    async function fetchFeedImages() {
      const imageArray = [];
      fetch(
        `https://api.newcastle.urbanobservatory.ac.uk/api/v2/sensors/timeseries/685e0b8e-9c97-41df-94db-c039205814d1`
      )
        .then((response) => response.json())
        .then((response) => {
          // setCamera2(response.latest.value);
          imageArray.push(response.latest.value);
          setImageList(imageArray);
        })
        .catch((error) => {
          console.log(error);
        });

      fetch(
        "https://api.newcastle.urbanobservatory.ac.uk/api/v2/sensors/entity/239cb433-d521-4e07-a239-eff22b826342"
      )
        .then((response) => response.json())
        .then((response) => {
          imageArray.push(response.feed[3].timeseries[0].latest.value);
          setImageList(imageArray);

          // console.log(
          //   "🚀 ~ file: index.js ~ line 35 ~ fetchFeedImages ~ response",
          //   response
          // );
        })
        .catch((error) => {
          console.log(error);
        });
      fetch(
        `https://api.newcastle.urbanobservatory.ac.uk/api/v2/sensors/timeseries/b0cf0739-8bf0-4edc-83ff-99be42d0dc21`
      )
        .then((response) => response.json())
        .then((response) => {
          // setCamera1(response.latest.value);
          imageArray.push(response.latest.value);
          setImageList(imageArray);

          // console.log(
          //   "🚀 ~ file: index.js ~ line 49 ~ fetchFeedImages ~ response",
          //   response
          // );
        })
        .catch((error) => {
          console.log(error);
        });

      fetch(
        "https://api.newcastle.urbanobservatory.ac.uk/api/v2/sensors/feed/a9f0600c-7967-4c4a-83e1-0a37dbf7981a"
      )
        .then((response) => response.json())
        .then((response) => {
          // console.log("🚀 ~ file: index.js ~ line 77 ~ .then ~ response", response.timeseries[0].latest.value)
          imageArray.push(response.timeseries[0].latest.value);
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
          console.log(
            "🚀 ~ file: index.js ~ line 98 ~ .then ~ response",
            response
          );
          imageArray.push(response.latest.value);
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
          imageArray.push(response.latest.value);
          setImageList(imageArray);
        })
        .catch((error) => {
          console.log(error);
        });

      console.log(
        "🚀 ~ file: index.js ~ line 104 ~ fetchFeedImages ~ imageArray",
        imageArray
      );
      console.log(
        "🚀 ~ file: index.js ~ line 104 ~ fetchFeedImages ~ imageArray",
        imageArray
      );
    }

    fetchFeedImages();
  }, []);

  return (
    <>
      {imageList != null ? (
        <img
          src={imageList[option ? option : 0]}
          alt="Images from street cameras"
          className={styles.image}
        />
      ) : (
        ""
      )}
    </>
  );
}
