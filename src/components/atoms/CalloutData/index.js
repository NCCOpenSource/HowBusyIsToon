import React, { useEffect, useState } from "react";
import styles from "./callout.module.css";
import footfallData from "./footfallbusyData.json";
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
      setHeader("More people than normal are visiting the city centre right now.");
     
      setcalloutClass(styles.red);
    } else if (data.city_state === "average") {
      setHeader("The number of people in the city centre is about normal.");
     
      setcalloutClass(styles.orange);
    } else {
      setHeader("There are not many people in the city centre right now.");
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
      </h1>
    </div>
  );
}
