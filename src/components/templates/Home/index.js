import React, { useState } from "react";
import ShopsRestaurantsMap from "../../atoms/Shops&RestaurantsMap";
import VisitCitySafetly from "../../atoms/VisitCitySafely";
import Callout from "../../molecules/Callout";
import CameraFeed from "../../molecules/CameraFeed";
import CouncilLinks from "../../molecules/CouncilLinks";
import HowBusyAreBuses from "../../molecules/HowBusyAreBuses";
import HowBusyAreRoads from "../../molecules/HowBusyAreRoads";
import SectionExample from "../../molecules/SectionExample";
import styles from "./home.module.css";

export default function Home() {
  const [state, setState] = useState("FootFall Camera");

  return (
    <>
      <div className={styles.container}>
        <>
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
        </>

        <div className={styles.SectionExample}>
          <SectionExample />
        </div>
        <div className={styles.CouncilLinks}>
          <CouncilLinks />
        </div>
      </div>
    </>
  );
}
