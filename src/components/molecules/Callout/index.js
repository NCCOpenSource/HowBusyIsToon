import React, { useState } from "react";
import CalloutData from "../../atoms/CalloutData";

export default function Callout() {
  const [calloutText, setCalloutText] = useState("loading");
  const [calloutSubText, setCalloutSubText] = useState("loading");
  const [calloutClass, setCalloutClass] = useState(true);


  return (
    // <div className={calloutClass ? styles.calloutQuiet : styles.calloutBusy}>
    //   <h1 className={styles.calloutText}>
    //     The Roads are usually quiet at this time. you should be ok but check the
    //     cameras to see if you should take an alternatve route.
    //   </h1>

    //   <div className={styles.calloutIconContainer}>
    //     {/* <img className={styles.calloutIcon} src={Icon} /> */}
    //     <Icon className={styles.calloutIcon} />
    //     <div className={styles.calloutIconRoad}></div>
    //   </div>
    // </div>
          <CalloutData />

  );
}
