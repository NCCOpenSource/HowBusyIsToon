import React, { useEffect, useState } from "react";
import styles from "./GetFeedImage.module.css";
import loader from "../../../images/loading.gif";

export default function GetFeedImage({ option }) {
  const [imageList, setImageList] = useState(null);
  const [apiFinished, setApiFinished] = useState(false);
  const imageArray = [];

  useEffect(() => {
    fetchFeedImages();

    function fetchFeedImages() {
      // Grey St old URL `https://api.newcastle.urbanobservatory.ac.uk/api/v2/sensors/timeseries/685e0b8e-9c97-41df-94db-c039205814d1`
      fetch(
        "https://api.vision.urbanobservatory.ac.uk/stills/image?location=GreyStTheatreSouth"
      )
        .then((response) => response.json())
        .then((response) => {
          imageArray[0] = response.latest.value;

          setApiFinished(false);
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
        })
        .catch((error) => {
          console.log(error);
        });

      setImageList(imageArray);
      setApiFinished(false);
      setApiFinished(true);
    }

    const interval = setInterval(() => {
      fetchFeedImages();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {imageList !== null && apiFinished && imageList[option] ? (
        <img
          src={apiFinished ? imageList[option] : loader}
          role="img"
          aria-label={"Images from street cameras of City Centre"}
          alt="Images from street cameras of City Centre"
          className={styles.image}
          width="1280"
          height="720"
        />
      ) : (
        <img
          src={loader}
          role="img"
          aria-label={"Images from street cameras of City Centre"}
          alt="Images from street cameras of City Centre"
          className={styles.image}
        />
      )}
    </>
  );
}
