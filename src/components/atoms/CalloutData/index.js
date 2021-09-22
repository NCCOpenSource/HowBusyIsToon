import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import styles from "./callout.module.css";
import footfallData from "./footfallbusyData.json";
import WalkingIcon from "../../../assets/icons/Walking.svg";

export default function CalloutData() {
  const [header, setHeader] = useState("");
  const [calloutClass, setcalloutClass] = useState("");

  useEffect(() => {
    async function getCalloutData() {
      const Response = await fetch(
        `https://howbusyistoon.dev.urbanobservatory.ac.uk/ncc-city-state.json`
      );
      const res = await Response.json();

      return res;
    }

    getCalloutData().then((res) => {
      setCalloutData(res);
    });
  }, []);
  function setCalloutDataError() {
    setHeader("Data is Currently Unavailable");
    setcalloutClass(styles.black);
  }
  function setCalloutData(data) {
    if (data == null) {
      setCalloutDataError();
      return;
    }

    if (data.city_state === "busy") {
      setHeader(
        "More people than normal are visiting the city centre right now."
      );

      setcalloutClass(styles.red);
    } else if (data.city_state === "average") {
      setHeader("The number of people in the city centre is about normal.");

      setcalloutClass(styles.orange);
    } else if (data.city_state === "quiet") {
      setHeader("There are not many people in the city centre right now.");
      setcalloutClass(styles.green);
    } else {
      setCalloutDataError();
    }
  }

  /* eslint-disable */

  /* eslint-enable */

  return (
    <div className={`${calloutClass} ${styles.calloutContainer} `}>
      <h1 className={styles.calloutText}>{header}</h1>
      <WalkingIcon className={styles.image} />
    </div>
  );
}
