import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import styles from "./callout.module.css";
import footfallData from "./footfallbusyData.json";
import WalkingIcon from "../../../assets/icons/Walking.svg";

export default function CalloutData() {
  const [data, setData] = useState(footfallData);
  const [header, setHeader] = useState("");
  const [calloutClass, setcalloutClass] = useState("");

  useEffect(() => {
    function getCalloutData() {
      fetch(`https://howbusyistoon.com/ncc-city-state.json`)
        .then((response) => {
          response.json();
        })
        .then((response) => {
          setData(response);
          setCalloutData();
        })
        .catch((error) => {
          console.log(error);
          setCalloutDataError();
        });
    }

    function setCalloutDataError() {
      setHeader("Data is Currently Unavailable");
      setcalloutClass(styles.black);
    }
    function setCalloutData() {
      if (data.city_state === "busy") {
        setHeader(
          "More people than normal are visiting the city centre right now."
        );

        setcalloutClass(styles.red);
      } else if (data.city_state === "average") {
        setHeader("The number of people in the city centre is about normal.");

        setcalloutClass(styles.orange);
      } else {
        setHeader("There are not many people in the city centre right now.");
        setcalloutClass(styles.green);
      }
    }
    getCalloutData();
    /* eslint-disable */
  }, []);
  /* eslint-enable */

  return (
    <div className={`${calloutClass} ${styles.calloutContainer} `}>
      <h1 className={styles.calloutText}>{header}</h1>
      <WalkingIcon className={styles.image} />
    </div>
  );
}
