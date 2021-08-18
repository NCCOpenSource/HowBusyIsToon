import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import ArticleExample from "../../atoms/ArticleExample";
import Box from "../../atoms/Box";
import styles from "./NexusArticle.module.css";

export default function NexusArticle() {
  return (
    <div className={styles.ArticleExample}>
      <Box>
        <p className={styles.topFont}>Nexus</p>
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
        Linkurl="https://livemap.nexus.org.uk/"
      />
    </div>
  );
}
