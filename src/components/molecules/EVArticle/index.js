import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import ArticleExample from "../../atoms/ArticleExample";
import Box from "../../atoms/Box";
import styles from "./EVArticle.module.css";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";

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
  console.log("🚀 ~ file: index.js ~ line 31 ~ EVArticle ~ data", data);
  // const image = getImage(
  //   data.allContentfulEvChargingStations.edges[0].node.image
  // );

  return (
    <div className={styles.container}>
      <Box>
        <p className={styles.topFont}>EV Charging Stations</p>
      </Box>
      <ArticleExample
        //   className={styles.ArticleExample}
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
        {/* <StaticImage
          alt=""
          className={styles.image}
          src={
            "//images.ctfassets.net/hk6oui71f47k/efN4j3YImJE1e4WloeRwb/5989509cdff9f4f53569c69efd87d596/ey-electric-car-charging-station-on-london-street.jpg?w=800&q=50"
          }
        /> */}
      </ArticleExample>
    </div>
  );
}
