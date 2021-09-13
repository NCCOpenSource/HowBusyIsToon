import React from "react";
import styles from "./VisitCitySafely.module.css";

export default function VisitCitySafetly() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        How to visit the city centre in a safe manner
      </h2>
      <p className={styles.text}>
        Google Maps provides information on your favourite shops and
        restaurants.
      </p>
      <p className={styles.text}>
        You can use the map to select your chosen location, if you click on
        ‘view larger map’ it will open a new window to Google Maps.
      </p>
      <p className={styles.text}>From here you may see:</p>
      <h3 className={styles.subTitle}>1. Open hours</h3>
      <p className={styles.text}>
        If the location is currently open and the hours they are operated and
        when this information was last updated.
      </p>
      <h3 className={styles.subTitle}>2. Forecasting</h3>
      <p className={styles.text}>
        A busy period forecasting tool which allows you to see by the hour what
        the busy and quiet periods are.
      </p>
      <h3 className={styles.subTitle}>3. Customer reviews</h3>
      <p className={styles.text}>
        Customer reviews which include photographs detailing the safety measures
        that the restaurant/shop have implemented and how successful they are.
      </p>
    </div>
  );
}
