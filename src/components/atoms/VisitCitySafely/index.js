import React from "react";
import styles from "./VisitCitySafely.module.css";

export default function VisitCitySafetly() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        How to Visit the City Center in a Safe Manner
      </p>
      <p className={styles.subTitle}>1. One Way System</p>
      <p className={styles.text}>
        Northumberland street has adopted a one-way system which will allow for
        social distancing. Look for the arrows at on the floor and the barriers
        placed at shop entrances for customer queues
      </p>
      <p className={styles.subTitle}>2. Protecting Others</p>
      <p lassName={styles.text}>
        If you’re visiting the city centre it’s important that you wear a face
        covering if you are using public transport or you are in shops, banks or
        other indoor spaces.
      </p>
      <p className={styles.subTitle}>3. Social Distancing</p>
      <p lassName={styles.text}>
        Northumberland street has adopted a one-way system which will allow for
        social distancing. Look for the arrows at on the floor and the barriers
        placed at shop entrances for customer queues
      </p>
    </div>
  );
}
