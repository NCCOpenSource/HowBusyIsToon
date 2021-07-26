import React from "react";
import SimpleArticle from "../../atoms/SimpleArticle";
import Callout from "../../molecules/Callout";
import CameraFeed from "../../molecules/CameraFeed";
import CouncilLinks from "../../molecules/CouncilLinks";
import SectionExample from "../../molecules/SectionExample";
import styles from "./home.module.css";
import { graphql, useStaticQuery } from "gatsby";

export default function Home() {
  const data = useStaticQuery(graphql`
    query Home {
      allContentfulCityCentreHomepage {
        edges {
          node {
            section1Title
            article1 {
              file {
                url
              }
              description
            }
            article1Title
            arcticleContent1 {
              arcticleContent1
            }
            article1Link
            article1Url
            article2Image {
              file {
                url
              }
              description
              title
            }
            articleTitle2
            articleUrl2
            articleContent2 {
              articleContent2
            }
            articleLink2
            articleUrl2
            articleImage3 {
              file {
                url
              }
              description
              title
            }
            articleContent3 {
              articleContent3
            }
            articleTitle3
            articleUrl3
            articleLink3

            linkTitle1
            linkTitle2
            linkTitle3
            linkUrl1
            linkurl2
            linkUrl3
            linkContent1 {
              linkContent1
            }
            linkContent2 {
              linkContent2
            }
            linkContent3 {
              linkContent3
            }
          }
        }
      }
    }
  `);
  console.log("🚀 ~ file: index.js ~ line 61 ~ Home ~ data", data);
  const homeData = data.allContentfulCityCentreHomepage.edges[0].node;
  return (
    <>
      <div className={styles.container}>
        <>
          <div className={styles.Callout}>
            <Callout />
          </div>
          <div className={styles.CameraFeed}>
            <CameraFeed />
          </div>
          <div className={styles.HowBusyAreRoads}>
            <SimpleArticle
              TopText="How Busy Are Roads?"
              BottomText="View live traffic updates of the busiest commuter routes in and out of
          the city centre"
            />
          </div>
          <div className={styles.HowBusyAreBuses}>
            <SimpleArticle
              TopText="How Busy Are Buses?"
              BottomText="View real time bus data on a map of the region to see exactly where
              your next bus is"
            />
          </div>
        </>

        <div className={styles.SectionExample}>
          <SectionExample homeData={homeData} />
        </div>
        <div className={styles.CouncilLinks}>
          <CouncilLinks />
        </div>
      </div>
    </>
  );
}
