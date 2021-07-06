import React, { useState, useEffect } from "react";
import styles from "./callout.module.css";
import Icon from "../../images/car.png";
import axios from "axios";
import { graphql, useStaticQuery } from "gatsby";

export default function Callout() {
  const [calloutText, setCalloutText] = useState("loading");
  const [calloutSubText, setCalloutSubText] = useState("loading");
  const [calloutClass, setCalloutClass] = useState("");

  useEffect(() => {
    fetch(
      `https://nccfootfallparking.blob.core.windows.net/api-data/latest_city_state.json`
    )
      .then((response) => organsieData(response)) // parse JSON from request
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // useEffect(() => {
  //   fetc
  //     .get(
  //       "https://nccfootfallparking.blob.core.windows.net/api-data/latest_city_state.json"
  //     )
  //     .then((response) => organsieData(response))
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  function organsieData(data) {
    console.log(data);
  }

  return (
    <div className={styles.callout}>
      <h1 className={styles.calloutText}>
        The Roads are usually quiet at this time. you should be ok but check the
        cameras to see if you should take an alternatve route.
      </h1>
      <div className={styles.calloutIconContainer}>
        <img className={styles.calloutIcon} src={Icon} />
      </div>
    </div>
  );
}
