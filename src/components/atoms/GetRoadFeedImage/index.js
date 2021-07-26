import React, { useEffect, useState } from "react";
import styles from "./GetRoadFeedImage.module.css";

export default function GetRoadFeedImage({ option }) {
  const [imageList, setImageList] = useState(null);
  const [apiFinished, setApiFinished] = useState(false);

  useEffect(() => {
    async function fetchFeedImages() {
      const imageArray = [];
      fetch(
        `https://api.newcastle.urbanobservatory.ac.uk/api/v2/sensors/timeseries/aeafb185-4463-4ac0-b048-7579d604d792`
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
        "https://api.newcastle.urbanobservatory.ac.uk/api/v2/sensors/timeseries/b2363f18-0696-4381-8461-a351ef51bbb1"
      )
        .then((response) => response.json())
        .then((response) => {
          imageArray[1] = response.latest.value;
          setImageList(imageArray);
        })
        .catch((error) => {
          console.log(error);
        });

      fetch(
        `https://api.newcastle.urbanobservatory.ac.uk/api/v2/sensors/timeseries/d93ca40c-183a-433a-9834-959943477bc4`
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
        "https://api.newcastle.urbanobservatory.ac.uk/api/v2/sensors/timeseries/5baa2ac0-b2d7-4273-8007-09e253f7a8b9"
      )
        .then((response) => response.json())
        .then((response) => {
          imageArray[3] = response.latest.value;
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
