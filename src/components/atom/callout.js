import React, { useState, useEffect } from "react";
import styles from "./callout.module.css";
// import Icon from "../../images/car.png";
import Icon from "../../assets/icons/graphic_car.svg";
import axios from "axios";
import { graphql, useStaticQuery } from "gatsby";

export default function Callout() {
  const [calloutText, setCalloutText] = useState("loading");
  const [calloutSubText, setCalloutSubText] = useState("loading");
  const [calloutClass, setCalloutClass] = useState(true);

  // useEffect(() => {
  //   fetch(
  //     `https://nccfootfallparking.blob.core.windows.net/api-data/latest_city_state.json`
  //   )
  //     .then((response) => setData(response)) // parse JSON from request
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  
  function setData(data) {
    console.log(data);
    //set states with logic below

    //   {
    //     if(data.state.city_state === 'busy') {
    //       this.header = 'Lots of people are visiting the city centre right now.';
    //       this.headerhighlight = 'You may find social distancing easier at a different time.';
    //       this.calloutClass = "callout--red";
    //     } else if (data.state.city_state === 'average') {
    //       this.header = 'People are out and about in the city centre right now.';
    //       this.headerhighlight = 'Social distancing is possible in many areas but not all.';
    //       this.calloutClass = "callout--orange";
    //     } else {
    //       this.header = 'There are not many people in the city centre right now.';
    //       this.headerhighlight = 'Social distancing should be easy.';
    //       this.calloutClass = "callout--green";
    //     }
    // },
  }

  return (
    <div className={calloutClass ? styles.calloutQuiet : styles.calloutBusy}>
        <h1 className={styles.calloutText}>
          The Roads are usually quiet at this time. you should be ok but check
          the cameras to see if you should take an alternatve route.
        </h1>
        <div className={styles.calloutIconContainer}>
          {/* <img className={styles.calloutIcon} src={Icon} /> */}
          <Icon className={styles.calloutIcon} />
          <div className={styles.calloutIconRoad}></div>
      </div>
    </div>
  );
}
