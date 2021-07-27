import React from "react";
import RoadsCameraFeed from "../../molecules/RoadsCameraFeed";
import EVArticle from "../../molecules/EVArticle";
import styles from "./Roads.module.css";
import RoadsSection from "../../organisms/RoadsSection";
import RoadsSection2 from "../../organisms/RoadsSection2";
import LocalRoadUpdates from "../../molecules/LocalRoadUpdates";
import CouncilLinks from "../../molecules/CouncilLinks";

export default function Roads() {
  return (
    <div className={styles.container}>
      <RoadsSection />
      <RoadsSection2 />
      <CouncilLinks />
    </div>
  );
}
