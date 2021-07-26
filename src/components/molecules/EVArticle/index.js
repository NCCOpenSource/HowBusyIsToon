import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import ArticleExample from "../../atoms/ArticleExample";
import Box from "../../atoms/Box";
import styles from "./EVArticle.module.css";

export default function EVArticle() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allContentfulEvChargingStations {
        edges {
          node {
            id
            hyperLink
            content
            url
            image {
              title
              description
              file {
                url
              }
            }
          }
        }
      }
    }
  `);

  return (
    <div className={styles.container}>
      <Box>
        <p className={styles.topFont}>EV Charging Stations</p>
      </Box>
      <ArticleExample
        Content={data.allContentfulEvChargingStations.edges[0].node.content}
        LinkTitle={data.allContentfulEvChargingStations.edges[0].node.hyperLink}
        Linkurl={data.allContentfulEvChargingStations.edges[0].node.url}
      >
        <img
          className={styles.image}
          src={
            data.allContentfulEvChargingStations.edges[0].node.image.file.url
          }
          alt={
            data.allContentfulEvChargingStations.edges[0].node.image.description
          }
        />
      </ArticleExample>
    </div>
  );
}
