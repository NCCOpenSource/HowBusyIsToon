import React from "react";
import EVArticle from "../../molecules/EVArticle";
import LocalRoadUpdates from "../../molecules/LocalRoadUpdates";
import styles from "./RoadSection2.module.css";

export default function RoadsSection2() {
  return (
    <div className={styles.container}>
      <div className={styles.EVArticle}>
        <EVArticle />
      </div>
      <div className={styles.LocalRoadUpdates}>
        <LocalRoadUpdates />
      </div>
    </div>
  );
}
