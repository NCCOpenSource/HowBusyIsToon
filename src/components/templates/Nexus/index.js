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

export default function Nexus() {
  return (
    <div className={styles.container}>
      <UnfortunatelyNexus />
      <div className={styles.Innercontainer}>
        <div className={styles.ArticleExample}>
          <Box>
            <h className={styles.topFont}>Nexus</h>
          </Box>
          <StaticImage
            alt=""
            className={styles.image}
            src={"../../../images/bus-Example.jpg"}
          />
          <ArticleExample
            title="Nexus"
            LinkTitle="Go to Nexus"
            Content="Plan your journey, view an interactive travel map and discover how Nexus is keeping you sage with the latest COVID-19 updates."
          />
        </div>
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
