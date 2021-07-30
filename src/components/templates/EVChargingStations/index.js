import React from "react";
import CouncilLinks from "../../molecules/CouncilLinks";
import AlternativeTransport from "../../organisms/AlternativeTransport";
import styles from "./EVChargingStations.module.css";

export default function EVChargingStations() {
  return (
    <div className={styles.container}>
      <div className={styles.EVMaps}>
        <iframe
          title="Electric Vehichle Map"
          src="https://www.plugshare.com/widget2.html?latitude=54.97206769445005&longitude=-1.6132124536205563&spanLat=0.02&spanLng=0.02&plugs=1,2,3,4,5,6,42,13,7,8,9,10,11,12,14,15,16,17"
          width="100%"
          height="600px"
          allow="geolocation"
        ></iframe>
      </div>
      <div className={styles.SectionExample}>
        <AlternativeTransport />
      </div>
      <div className={styles.CouncilLinks}>
        <CouncilLinks />
      </div>
    </div>
  );
}
