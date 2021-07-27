import React from "react";
import EVMaps from "../../molecules/EvMap";
import styles from "./EVChargingStations.module.css";
import SectionExample from "../../molecules/SectionExample";
import CouncilLinks from "../../molecules/CouncilLinks";
export default function EVChargingStations() {
  return (
    <div className={styles.container}>
      <div className={styles.EVMaps}>
        <EVMaps />
      </div>
      <div className={styles.SectionExample}>
        <SectionExample />
      </div>
      <div className={styles.CouncilLinks}>
        <CouncilLinks />
      </div>
    </div>
  );
}
