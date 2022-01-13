import React, { useEffect, useState } from "react";
import styles from "./GetRoadFeedImage.module.css";
import loader from "../../../images/loading.gif";

export default function GetRoadFeedImage({ option }) {
  const [imageList, setImageList] = useState(null);
  const [apiFinished, setApiFinished] = useState(false);

  useEffect(() => {
    async function fetchFeedImages() {
      const imageArray = [];
      /* old URL `https://api.newcastle.urbanobservatory.ac.uk/api/v2/sensors/timeseries/camera-mounted-at-newcastle-a1058-stephenson-road-heaton-road-newton-road-corner-house/camera-image-view-01/raw` */
      /*
      fetch(
        `https://netrafficcams.co.uk/sites/default/files/images/cameras//NC_A1058A1.jpg`
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
      */
      imageArray[0] = "https://community.newcastle.gov.uk/HBITcache/index.php?image=CoastRd.jpg"; // coast road
      
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
      /*
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
        */
          imageArray[2] = "https://community.newcastle.gov.uk/HBITcache/index.php?image=CowgateJunction.jpg";
      /*
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
        */
     imageArray[3] = "https://community.newcastle.gov.uk/HBITcache/index.php?image=MosleySt.jpg"
      
      /*
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
        */
       imageArray[4] = "https://community.newcastle.gov.uk/HBITcache/index.php?image=GosforthHighSt.jpg";
    }

    fetchFeedImages();
  }, []);

  return (
    <>
      {imageList !== null && imageList[option] !== null && apiFinished ? (
        <img
          src={imageList[option] ? imageList[option] : loader}
          role="img"
          aria-label={
            "Images from street cameras Showing Roads and the traffic on them"
          }
          alt="Images from street cameras Showing Roads and the traffic on them"
          className={styles.image}
          width="950"
          height="550"
        />
      ) : (
        <div className={styles.imagePlaceholder} />
      )}
    </>
  );
}
