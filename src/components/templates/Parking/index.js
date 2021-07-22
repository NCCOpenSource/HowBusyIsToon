import React from "react";
import RoadsCameraFeed from "../../molecules/RoadsCameraFeed";
import EVArticle from "../../molecules/EVArticle";
import styles from "./Parking.module.css";
import SectionExample from "../../molecules/SectionExample";
import CouncilLinks from "../../molecules/CouncilLinks";
import CarParkMap from "../../molecules/CarParkMap";
import Box from "../../atoms/Box";
import { StaticImage } from "gatsby-plugin-image";

export default function Parking() {
  return (
    <div className={styles.container}>
      <Box color="grey" fontColor="black">

        <ul className={styles.list}>
         <StaticImage width={24} src='../../../images/carparkiconsred.png' /> <li>Limited Spaces</li>
         <StaticImage width={24} src='../../../images/carparkiconsOrange.png' /> <li>Moderatly Busy</li>
         <StaticImage width={24} src='../../../images/carparkicons.png' /> <li>Many Spaces Available</li>
         <StaticImage width={24} src='../../../images/carparkiconsBlack.png' /> <li>No Data</li>
        </ul>
      </Box>
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
