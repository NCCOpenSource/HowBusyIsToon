import React from "react";
import styles from "./HowBusyIsAbout.module.css";

export default function HowBusyIsAbout({ calloutText }) {
  return (
    <div className={styles.calloutContainer}>
      <h1 className={styles.calloutText}>{calloutText}</h1>
    </div>
  );
}
