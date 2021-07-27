import React, { useState } from "react";
import styles from "./RoadSection2.module.css";
import EVArticle from "../../molecules/EVArticle";
import LocalRoadUpdates from "../../molecules/LocalRoadUpdates";
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
