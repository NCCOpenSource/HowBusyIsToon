import React, { useEffect, useState } from "react";
import styles from "./RoadsLookingBusy.module.css";

export default function RoadsLookingBusy() {
  return (
    <div className={styles.calloutContainer}>
      <h1 className={styles.calloutText}>
        Roads looking busy? Have you considered cycling or walking instead? Our
        useful links provide tools to help you plan your journey.
      </h1>
    </div>
  );
}
