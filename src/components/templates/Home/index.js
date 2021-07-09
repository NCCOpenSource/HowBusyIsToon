import React from "react";

import styles from "./home.module.css";
import HowBusyAreBuses from "../../molecules/HowBusyAreBuses";
import HowBusyAreRoads from "../../molecules/HowBusyAreRoads";
import CameraFeed from "../../molecules/CameraFeed";
import Callout from "../../molecules/Callout";
import SectionExample from "../../molecules/SectionExample";
import CouncilLinks from "../../molecules/CouncilLinks";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.Callout}>
        <Callout />
      </div>
      <div className={styles.CameraFeed}>
        <CameraFeed />
      </div>
      <div className={styles.HowBusyAreRoads}>
        <HowBusyAreRoads />
      </div>
      <div className={styles.HowBusyAreBuses}>
        <HowBusyAreBuses />
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
