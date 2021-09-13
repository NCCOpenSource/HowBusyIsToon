import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import HowBusyIsAbout from "../../atoms/HowBusyIsAbout";
import LinkSection from "../../atoms/LinkSection";
import AboutSection from "../../organisms/AboutSection";
import styles from "./About.module.css";
import SimpleArticle from "../../atoms/SimpleArticle";

export default function About() {
  const data = useStaticQuery(graphql`
    query About {
      allContentfulAboutHowBusyIsToon {
        edges {
          node {
            calloutText
            title1
            content1 {
              content1
            }
            title2
            content2 {
              content2
            }
            title3
            content3 {
              content3
            }
            id
            title4
            content4 {
              content4
            }
            linkTitle1
            linkUrl1
            linkContent1 {
              linkContent1
            }
            linkTitle2
            linkContent2 {
              linkContent2
            }
            linkUrl2
          }
        }
      }
    }
  `);
  const Aboutdata = data.allContentfulAboutHowBusyIsToon.edges[0].node;

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <HowBusyIsAbout calloutText={Aboutdata.calloutText} />
        {/* <LinkSection
          link={Aboutdata.linkUrl1}
          heading={Aboutdata.linkTitle1}
          content={Aboutdata.linkContent1.linkContent1}
        />
        <LinkSection
          link={Aboutdata.linkUrl2}
          heading={Aboutdata.linkTitle2}
          content={Aboutdata.linkContent2.linkContent2}
        /> */}
        <Link className={styles.sidebarLink} to={Aboutdata.linkUrl1}>
          <SimpleArticle
            TopText={Aboutdata.linkTitle1}
            BottomText={Aboutdata.linkContent1.linkContent1}
          />
        </Link>
        <Link className={styles.sidebarLink} to={Aboutdata.linkUrl2}>
          <SimpleArticle
            TopText={Aboutdata.linkTitle2}
            BottomText={Aboutdata.linkContent2.linkContent2}
          />
        </Link>
      </div>

      <AboutSection Aboutdata={Aboutdata} />
    </div>
  );
}
