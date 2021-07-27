import React from "react";
import CouncilLinks from "../../molecules/CouncilLinks";
import EVMaps from "../../molecules/EvMap";
import AlternativeTransport from "../../organisms/AlternativeTransport";
import styles from "./EVChargingStations.module.css";

export default function EVChargingStations() {
  return (
    <div className={styles.container}>
      <div className={styles.EVMaps}>
        <EVMaps />
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
