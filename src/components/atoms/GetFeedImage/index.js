import React, { useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import styles from "./GetFeedImage.module.css";
export default function GetFeedImage({ option }) {
  const [camera1, setCamera1] = useState("");
  console.log("🚀 ~ file: index.js ~ line 5 ~ GetFeedImage ~ camera1", camera1);
  const [camera2, setCamera2] = useState("");
  console.log("🚀 ~ file: index.js ~ line 7 ~ GetFeedImage ~ camera2", camera2);
  const [camera3, setCamera3] = useState("");
  console.log("🚀 ~ file: index.js ~ line 9 ~ GetFeedImage ~ camera3", camera3);
  const [camera4, setCamera4] = useState("");
  console.log(
    "🚀 ~ file: index.js ~ line 11 ~ GetFeedImage ~ camera4",
    camera4
  );

  useEffect(() => {
    async function fetchFeedImages() {
      fetch(
        `https://api.newcastle.urbanobservatory.ac.uk/api/v2/sensors/timeseries/b0cf0739-8bf0-4edc-83ff-99be42d0dc21`
      )
        .then((response) => response.json())
        .then((response) => setCamera1(response.latest.value))
        .catch((error) => {
          console.log(error);
        });

      fetch(
        `https://api.newcastle.urbanobservatory.ac.uk/api/v2/sensors/timeseries/685e0b8e-9c97-41df-94db-c039205814d1`
      )
        .then((response) => response.json())
        .then((response) => setCamera2(response.latest.value))
        .catch((error) => {
          console.log(error);
        });

      fetch(
        `https://api.newcastle.urbanobservatory.ac.uk/api/v2/sensors/timeseries/b0cf0739-8bf0-4edc-83ff-99be42d0dc21`
      )
        .then((response) => response.json())
        .then((response) => setCamera3(response.latest.value))
        .catch((error) => {
          console.log(error);
        });

      fetch(
        `https://api.newcastle.urbanobservatory.ac.uk/api/v2/sensors/timeseries/b0cf0739-8bf0-4edc-83ff-99be42d0dc21`
      )
        .then((response) => response.json())
        .then((response) => setCamera4(response.latest.value))
        .catch((error) => {
          console.log(error);
        });

      console.log("test1");

      fetch(
        `https://chargepoints.dft.gov.uk/api/retrieve/registry/postcode/NE1+8XG/limit/10/
          `,
        {
          mode: "no-cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
        // .then((response) => {response.json(); console.log(response)})
        .then((response) => response.json())
        .then((response) => {
          console.log(
            "🚀 ~ file: index.js ~ line 29 ~ .then ~ response",
            response
          );
          console.log(
            "🚀 ~ file: index.js ~ line 29 ~ .then ~ response",
            response
          );
          console.log(response);
          console.log("test2");
        })
        .catch((error) => {
          console.log(error);
        });
      console.log("test3");
    }
    fetchFeedImages();
  }, []);

  return (
    <>
      {option == 1 || option == undefined ? (
        <img src={camera1} alt="" className={styles.image} />
      ) : (
        ""
      )}
      {option == 2 ? <img src={camera2} alt="" className={styles.image} /> : ""}
      {option == 3 ? <img src={camera3} alt="" className={styles.image} /> : ""}
      {option == 4 ? <img src={camera4} alt="" className={styles.image} /> : ""}
      {/* <img src={camera1} 
      // style={{ height: "100%", width: "100%" }}
      ></img>
      <img
        src={camera2}
        // style={{ height: "100%", width: "100%" }}
      ></img>
      <img
        src={camera3}
        // style={{ height: "100%", width: "100%" }}
      ></img>
      <img
        src={camera4}
        // style={{ height: "100%", width: "100%" }}
      ></img> */}
    </>
  );
}
