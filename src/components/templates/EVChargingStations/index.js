import React from "react";
import CouncilLinks from "../../molecules/CouncilLinks";
import AlternativeTransport from "../../organisms/AlternativeTransport";
import styles from "./EVChargingStations.module.css";

export default function EVChargingStations() {
  return (
    <div className={styles.container}>
      <div className={styles.calloutContainer}>
        <p className={styles.calloutText}>
          {" "}
          The information provided here is publicly available and accurate to
          the best of our knowledge. Unfortunately we do not have access to real
          time data on EV charging station usage, location or functionality. We
          are currently engaging with Government on a national project to make
          more EV charging data openly available in real time for citizens.
        </p>
      </div>
      {/* <p className={styles.disclaimer}>
        The information provided here is publicly available and accurate to the
        best of our knowledge. Unfortunately we do not have access to real time
        data on EV charging station usage, location or functionality. We are
        currently engaging with Government on a national project to make more EV
        charging data openly available in real time for citizens.
      </p> */}
      <div className={styles.EVMaps}>
        <iframe
          title="Electric vehichle map"
          src="https://www.plugshare.com/widget2.html?latitude=54.97206769445005&longitude=-1.6132124536205563&spanLat=0.02&spanLng=0.02&plugs=1,2,3,4,5,6,42,13,7,8,9,10,11,12,14,15,16,17"
          width="100%"
          height="600px"
          allow="geolocation"
        ></iframe>
      </div>
      {/* <div className={styles.SectionExample}>
        <AlternativeTransport />
      </div> */}
      <div className={styles.CouncilLinks}>
        <CouncilLinks />
      </div>
    </div>
  );
}
