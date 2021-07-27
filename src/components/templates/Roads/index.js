import React from "react";
import CouncilLinks from "../../molecules/CouncilLinks";
import RoadsSection from "../../organisms/RoadsSection";
import RoadsSection2 from "../../organisms/RoadsSection2";
import styles from "./Roads.module.css";

export default function Roads() {
  return (
    <div className={styles.container}>
      <RoadsSection />
      <RoadsSection2 />
      <CouncilLinks />
    </div>
  );
}
