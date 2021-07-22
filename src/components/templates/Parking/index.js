import React from "react";
import RoadsCameraFeed from "../../molecules/RoadsCameraFeed";
import EVArticle from "../../molecules/EVArticle";
import styles from "./Parking.module.css";
import SectionExample from "../../molecules/SectionExample";
import CouncilLinks from "../../molecules/CouncilLinks";
import CarParkMap from "../../molecules/CarParkMap";
import Box from "../../atoms/Box";
import { StaticImage } from "gatsby-plugin-image";
import ColorKey from "../../molecules/ColorKey";

export default function Parking() {
  return (
    <div className={styles.container}>
      <ColorKey />
      <div className={styles.SectionExample}>
        <CarParkMap />
      </div>
      <div className={styles.SectionExample}>
        <SectionExample />
      </div>
      <div className={styles.CouncilLinks}>
        <CouncilLinks />
      </div>
    </div>
  );
}
