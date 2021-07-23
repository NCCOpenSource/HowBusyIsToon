import React from "react";
import RoadsCameraFeed from "../../molecules/RoadsCameraFeed";
import EVArticle from "../../molecules/EVArticle";
import styles from "./Nexus.module.css";
import SectionExample from "../../molecules/SectionExample";
import CouncilLinks from "../../molecules/CouncilLinks";
import CarParkMap from "../../molecules/CarParkMap";
import Box from "../../atoms/Box";
import { StaticImage } from "gatsby-plugin-image";
import ColorKey from "../../molecules/ColorKey";
import LocalTravelUpdates from "../../molecules/LocalTravelUpdates";
import ArticleExample from "../../atoms/ArticleExample";
import UnfortunatelyNexus from "../../atoms/UnfortunatelyNexus";
import NexusArticle from "../../molecules/NexusArticle";

export default function Nexus() {
  return (
    <div className={styles.container}>
      <UnfortunatelyNexus />
      <div className={styles.Innercontainer}>
        <NexusArticle />
        <div className={styles.SectionExample}>
          <LocalTravelUpdates />
        </div>
      </div>
      <div className={styles.CouncilLinks}>
        <CouncilLinks />
      </div>
    </div>
  );
}
