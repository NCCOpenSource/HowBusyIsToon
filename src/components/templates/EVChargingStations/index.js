import React from "react";
import RoadsCameraFeed from "../../molecules/RoadsCameraFeed";
import EVArticle from "../../molecules/EVArticle";
import styles from "./EVChargingStations.module.css";

export default function EVChargingStations() {
  return (
    <div className={styles.container}>
      <div className={styles.RoadsCameraFeed}>
        <RoadsCameraFeed />
      </div>
      <div className={styles.EVArticle}>
        <EVArticle />
      </div>
    </div>
  );
}
