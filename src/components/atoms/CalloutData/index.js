import React, { useState, useEffect } from "react";
import footfallData from "./footfallbusyData.json";
import styles from "./callout.module.css";
export default function CalloutData() {
  const [data, setData] = useState(footfallData);
  const [header, setHeader] = useState("");
  const [headerhighlight, setHeaderhighlight] = useState("");
  const [calloutClass, setcalloutClass] = useState("");
  console.log("🚀 ~ file: carParksData.js ~ line 5 ~ CalloutData ~ data", data);

  // useEffect(() => {
  //   fetch(`https://howbusyistoon.com/ncc-city-state.json`)
  //     .then((response) => {
  //       response.json();
  //       console.log(response);
  //     })
  //     .then((response) => {
  //       setData(response);
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  useEffect(() => {
    if (data.city_state === "busy") {
      setHeader("Lots of people are visiting the city centre right now.");
      setHeaderhighlight(
        "You may find social distancing easier at a different time."
      );
      setcalloutClass(styles.red);
    } else if (data.city_state === "average") {
      setHeader("People are out and about in the city centre right now.");
      setHeaderhighlight(
        "People are out and about in the city centre right now."
      );
      setcalloutClass(styles.orange);
    } else {
      setHeader("There are not many people in the city centre right now.");
      setHeaderhighlight("Social distancing should be easy.");
      setcalloutClass(styles.green);
    }
    const CalloutData = [header, headerhighlight, calloutClass];
    console.log(
      "🚀 ~ file: index.js ~ line 45 ~ CalloutData ~ CalloutData",
      CalloutData
    );
  }, []);

  return (
    <div className={`${calloutClass} ${styles.calloutContainer} `}>
      <h1 className={styles.calloutText}>
        {header}
        <h2 className={styles.calloutText}>{headerhighlight}</h2>
      </h1>
    </div>
  );
}
