import React from "react";
import styles from "./NexusArticle.module.css";
import Box from "../../atoms/Box";
import { StaticImage } from "gatsby-plugin-image";
import ArticleExample from "../../atoms/ArticleExample";

export default function NexusArticle() {
  return (
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
  );
}
