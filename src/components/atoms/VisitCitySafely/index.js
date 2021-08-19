import React from "react";
import styles from "./VisitCitySafely.module.css";

export default function VisitCitySafetly() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        How to Visit the City Center in a Safe Manner
      </p>
      <p className={styles.text}>
      Google Maps provides information on your favourite shops and restaurants.
      </p>
      <p className={styles.text}>
      You can use the map to select your chosen location, if you click on ‘view larger map’ it will open a new window to Google Maps.
      </p>
      <p className={styles.text}>
      From here you may see:
      </p>
      <p className={styles.subTitle}>1. Open Hours</p>
      <p className={styles.text}>
        If the location is currently open and the hours they are operated and when this information was last updated.
      </p>
      <p className={styles.subTitle}>2. Forecasting</p>
      <p className={styles.text}>
      A busy period forecasting tool which allows you to see by the hour what the busy and quiet periods are.
      </p>
      <p className={styles.subTitle}>3. Customer Reviews</p>
      <p className={styles.text}>
      Customer reviews which include photographs detailing the safety measures that the restaurant/shop have implemented and how successful they are.
      </p>
    </div>
  );
}
