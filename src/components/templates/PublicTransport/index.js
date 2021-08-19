import React from "react";
import BusMap from "../../molecules/BusMap";
import ColorKey from "../../molecules/ColorKey";
import CouncilLinks from "../../molecules/CouncilLinks";
import LocalTravelUpdates from "../../molecules/LocalTravelUpdates";
import NexusArticle from "../../molecules/NexusArticle";
import UsefulLinks from "../../organisms/UsefulLinks";
import styles from "./PublicTransport.module.css";
import styles2 from "../Nexus/Nexus.module.css";

export default function PublicTransport() {
  return (
    <div className={styles.container}>
      <div className={styles.ColorKey}>
        <ColorKey />
      </div>
      <div className={styles.BusMap}>
        <BusMap />
      </div>
      <div className={styles2.Innercontainer}>
        <NexusArticle />
        <div className={styles2.SectionExample}>
          <LocalTravelUpdates />
        </div>
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
