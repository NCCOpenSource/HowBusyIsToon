import React, { useEffect, useState } from "react";
import styles from "./GetRoadFeedImage.module.css";

export default function GetRoadFeedImage({ option }) {
  const [imageList, setImageList] = useState(null);
  const [apiFinished, setApiFinished] = useState(false);

  useEffect(() => {
    async function fetchFeedImages() {
      const imageArray = [];
      fetch(
        `https://api.newcastle.urbanobservatory.ac.uk/api/v2/sensors/feed/camera-mounted-at-newcastle-a1058-stephenson-road-heaton-road-newton-road-corner-house/camera-image`
      )
        .then((response) => response.json())
        .then((response) => {
     
          imageArray[0] = response.timeseries[0].latest.value;

          setImageList(imageArray);
          setApiFinished(true);
        })
        .catch((error) => {
          console.log(error);
        });

      fetch(
        "https://api.newcastle.urbanobservatory.ac.uk/api/v2/sensors/entity/camera-mounted-at-newcastle-a167-ponteland-road-stamfordham-road-b1305-two-ball-lonnen"
      )
        .then((response) => response.json())
        .then((response) => {
          imageArray[1] = response.feed[0].timeseries[0].latest.value;
          imageArray[2] = response.feed[1].timeseries[0].latest.value;
          imageArray[3] = response.feed[2].timeseries[0].latest.value;
          imageArray[4] = response.feed[3].timeseries[0].latest.value;
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
          imageArray[5] = response.feed[0].timeseries[0].latest.value;
          imageArray[6] = response.feed[1].timeseries[0].latest.value;
          imageArray[7] = response.feed[2].timeseries[0].latest.value;
          imageArray[8] = response.feed[3].timeseries[0].latest.value;
          setImageList(imageArray);
        })
        .catch((error) => {
          console.log(error);
        });

      fetch(
        "https://api.newcastle.urbanobservatory.ac.uk/api/v2/sensors/timeseries/camera-mounted-at-newcastle-b1318-high-street-a191-church-road-salters-road/camera-image-view-01/raw"
      )
        .then((response) => response.json())
        .then((response) => {
          imageArray[9] = response.latest.value;
          setImageList(imageArray);
        })
        .catch((error) => {
          console.log(error);
        });
      fetch(
        "https://api.newcastle.urbanobservatory.ac.uk/api/v2/sensors/timeseries/camera-mounted-at-newcastle-b1318-high-street-a191-church-road-salters-road/camera-image-view-02/raw"
      )
        .then((response) => response.json())
        .then((response) => {
          imageArray[10] = response.latest.value;
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
          imageArray[11] = response.latest.value;
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
            backgroundImage: `url(${imageList[option]})`,
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
