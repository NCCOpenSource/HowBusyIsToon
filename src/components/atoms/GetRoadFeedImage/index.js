import React, { useEffect, useState } from "react";
import styles from "./GetRoadFeedImage.module.css";
export default function GetRoadFeedImage({ option }) {
  const [imageList, setImageList] = useState(null);

  // Theres a better way of loading images , currently on page load/first load the image is not visible

  useEffect(() => {
    async function fetchFeedImages() {
      const imageArray = [];
      fetch(
        `https://api.newcastle.urbanobservatory.ac.uk/api/v2/sensors/timeseries/aeafb185-4463-4ac0-b048-7579d604d792`
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(
            "🚀 ~ file: index.js ~ line 15 ~ .then ~ response",
            response
          );
          // setCamera2(response.latest.value);
          // cant trust .push() as we dont know order Api fetches
          //  imageArray.push()
          imageArray[0] = response.latest.value;
          setImageList(imageArray);
        })
        .catch((error) => {
          console.log(error);
        });

      fetch(
        "https://api.newcastle.urbanobservatory.ac.uk/api/v2/sensors/timeseries/b2363f18-0696-4381-8461-a351ef51bbb1"
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(
            "🚀 ~ file: index.js ~ line 29 ~ .then ~ response",
            response
          );
          imageArray[1] = response.latest.value;
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
        `https://api.newcastle.urbanobservatory.ac.uk/api/v2/sensors/timeseries/d93ca40c-183a-433a-9834-959943477bc4`
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(
            "🚀 ~ file: index.js ~ line 46 ~ .then ~ response",
            response
          );
          // setCamera1(response.latest.value);
          imageArray[2] = response.latest.value;
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
        "https://api.newcastle.urbanobservatory.ac.uk/api/v2/sensors/timeseries/5baa2ac0-b2d7-4273-8007-09e253f7a8b9"
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(
            "🚀 ~ file: index.js ~ line 65 ~ .then ~ response",
            response
          );
          // console.log("🚀 ~ file: index.js ~ line 77 ~ .then ~ response", response.timeseries[0].latest.value)
          imageArray[3] = response.latest.value;
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
      ) : null}
    </>
  );
}
