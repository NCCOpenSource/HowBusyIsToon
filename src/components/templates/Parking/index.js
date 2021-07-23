import React from "react";
import CarParkMap from "../../molecules/CarParkMap";
import ColorKey from "../../molecules/ColorKey";
import CouncilLinks from "../../molecules/CouncilLinks";
import SectionExample from "../../molecules/SectionExample";
import styles from "./Parking.module.css";

export default function Parking() {
  return (
    <div className={styles.container}>
      <ColorKey />
      <div className={styles.SectionExample}>
        <CarParkMap />
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
