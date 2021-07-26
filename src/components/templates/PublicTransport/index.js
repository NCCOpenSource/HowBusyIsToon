import React from "react";
import BusMap from "../../molecules/BusMap";
import ColorKey from "../../molecules/ColorKey";
import CouncilLinks from "../../molecules/CouncilLinks";
import UsefulLinks from "../../molecules/UsefulLinks";
import styles from "./PublicTransport.module.css";

export default function PublicTransport() {
  return (
    <div className={styles.container}>
      <ColorKey />
      <div className={styles.BusMap}>
        <BusMap />
      </div>
      <div className={styles.UsefulLinks}>
        <UsefulLinks />
      </div>
      <div className={styles.CouncilLinks}>
        <CouncilLinks />
      </div>
    </div>
  );
}
