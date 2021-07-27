import React from "react";
import EVArticle from "../../molecules/EVArticle";
import RoadsCameraFeed from "../../molecules/RoadsCameraFeed";
import styles from "./Buses.module.css";

export default function Buses() {
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
