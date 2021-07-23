import React, { useState } from "react";
import ShopsRestaurantsMap from "../../atoms/Shops&RestaurantsMap";
import VisitCitySafetly from "../../atoms/VisitCitySafely";
import CouncilLinks from "../../molecules/CouncilLinks";
import SectionExample from "../../molecules/SectionExample";
import styles from "./ShopsAndRestaurants.module.css";

export default function ShopsAndRestaurants() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.VisitCitySafetly}>
          <VisitCitySafetly />
        </div>
        <div className={styles.ShopsRestaurantsMap}>
          <ShopsRestaurantsMap />
        </div>
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
