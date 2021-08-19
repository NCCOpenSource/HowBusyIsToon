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
        src={"../../../images/metro-01.png"}
      />
      <ArticleExample
        title="Nexus"
        LinkTitle="Go to Nexus"
        Content="Find out how how busy the Metro stations are, see which trains are busy or quiet and let Nexus know how busy the train you have travelled on was"
        Linkurl="https://www.nexus.org.uk/metro/how-busy"
      />
    </div>
  );
}
