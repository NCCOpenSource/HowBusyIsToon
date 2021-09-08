import React, { useEffect, useState } from "react";
import styles from "./GetRoadFeedImage.module.css";
import loader from "../../../images/loading.gif";

export default function GetRoadFeedImage({ option }) {
  const [imageList, setImageList] = useState(null);
  const [apiFinished, setApiFinished] = useState(false);

  useEffect(() => {
    async function fetchFeedImages() {
      const imageArray = [];
      fetch(
        `https://api.newcastle.urbanobservatory.ac.uk/api/v2/sensors/timeseries/camera-mounted-at-newcastle-a1058-stephenson-road-heaton-road-newton-road-corner-house/camera-image-view-01/raw`
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
        `https://api.newcastle.urbanobservatory.ac.uk/api/v2/sensors/timeseries/camera-mounted-at-newcastle-a1058-stephenson-road-heaton-road-newton-road-corner-house/camera-image/raw`
      )
        .then((response) => response.json())
        .then((response) => {
          imageArray[1] = response.latest.value;

          setImageList(imageArray);
          setApiFinished(true);
        })
        .catch((error) => {
          console.log(error);
        });

      fetch(
        "https://api.newcastle.urbanobservatory.ac.uk/api/v2/sensors/timeseries/camera-mounted-at-newcastle-a167-ponteland-road-stamfordham-road-b1305-two-ball-lonnen/camera-image-view-03/raw"
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
        "https://api.newcastle.urbanobservatory.ac.uk/api/v2/sensors/entity/camera-mounted-at-newcastle-a186-pilgrim-street-mosley-street"
      )
        .then((response) => response.json())
        .then((response) => {
          imageArray[3] = response.feed[3].timeseries[0].latest.value;
          setImageList(imageArray);
        })
        .catch((error) => {
          console.log(error);
        });

      fetch(
        "https://api.newcastle.urbanobservatory.ac.uk/api/v2/sensors/timeseries/camera-mounted-at-newcastle-b1318-high-street-a191-church-road-salters-road/camera-image-view-03/raw"
      )
        .then((response) => response.json())
        .then((response) => {
          imageArray[4] = response.latest.value;
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
        <div
          style={{
            backgroundImage: imageList[option]
              ? `url(${imageList[option]})`
              : `url(${loader})`,
          }}
          role="img"
          aria-label={
            "Images from street cameras Showing Roads and the traffic on them"
          }
          alt="Images from street cameras Showing Roads and the traffic on them"
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
