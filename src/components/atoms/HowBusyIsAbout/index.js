import React from "react";
import styles from "./HowBusyIsAbout.module.css";

export default function HowBusyIsAbout() {
  return (
    <div className={styles.calloutContainer}>
      <h1 className={styles.calloutText}>
        How Busy Is Toon - Your site for real time data sharing about our city.
      </h1>
    </div>
  );
}
