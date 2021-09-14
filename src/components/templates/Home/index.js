import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import CalloutData from "../../atoms/CalloutData";
import SimpleArticle from "../../atoms/SimpleArticle";
import CameraFeed from "../../molecules/CameraFeed";
import CouncilLinks from "../../molecules/CouncilLinks";
import SectionExample from "../../molecules/SectionExample";
import styles from "./home.module.css";

export default function Home() {
  const data = useStaticQuery(graphql`
    query Home {
      allContentfulCityCentreHomepage {
        edges {
          node {
            section1Title
            article1image {
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

  const homeData = data.allContentfulCityCentreHomepage.edges[0].node;
  const homeSections = [
    {
      id: 1,
      Title: homeData.article1Title,
      Content: homeData.arcticleContent1.arcticleContent1,
      LinkTitle: homeData.article1Link,
      Linkurl: homeData.article1Url,
      image: homeData.article1image.file.url,
      alt: homeData.article1image.description,
    },
    {
      id: 2,
      Title: homeData.articleTitle2,
      Content: homeData.articleContent2.articleContent2,
      LinkTitle: homeData.articleLink2,
      Linkurl: homeData.articleUrl2,
      image: homeData.article2Image.file.url,
      alt: homeData.article2Image.description,
    },
    {
      id: 3,
      Title: homeData.articleTitle3,
      Content: homeData.articleContent3.articleContent3,
      LinkTitle: homeData.articleLink3,
      Linkurl: homeData.linkUrl3,
      image: homeData.articleImage3.file.url,
      alt: homeData.articleImage3.description,
    },
  ];
  return (
    <>
      <div className={styles.container}>
        <>
          <div className={styles.Callout}>
            <CalloutData />
          </div>
          <div className={styles.CameraFeed}>
            <CameraFeed />
          </div>
          <Link className={styles.HowBusyAreRoads} to={"/roads"}>
            <SimpleArticle
              TopText="How Busy Are Roads?"
              BottomText="View live traffic updates of the busiest commuter routes in and out of
          the city centre"
            />
          </Link>
          <Link className={styles.HowBusyAreBuses} to={"/transport"}>
            <SimpleArticle
              TopText="How Busy Are Buses?"
              BottomText="View real time bus data on a map of the region to see exactly where
              your next bus is"
            />
          </Link>
        </>

        <div className={styles.SectionExample}>
          <SectionExample
            backgroundColor={"none"}
            fontColor={"black"}
            title={homeData.section1Title}
            articleSections={homeSections}
          />
        </div>
        <div className={styles.CouncilLinks}>
          <CouncilLinks />
        </div>
      </div>
    </>
  );
}
