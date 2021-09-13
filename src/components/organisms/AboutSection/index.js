import React from "react";
import Box from "../../atoms/Box";
import AboutSectionArticle from "../../molecules/AboutSectionArticle";
import styles from "./AboutSection.module.css";

export default function AboutSection({ Aboutdata }) {
  const aboutArticleSections = [
    {
      id: 1,
      subHeading: Aboutdata.title1,
      contentText: Aboutdata.content1.content1,
    },
    {
      id: 2,
      subHeading: Aboutdata.title2,
      contentText: Aboutdata.content2.content2,
    },
    {
      id: 3,
      subHeading: Aboutdata.title3,
      contentText: Aboutdata.content3.content3,
    },
    {
      id: 4,
      subHeading: Aboutdata.title4,
      contentText: Aboutdata.content4.content4,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <Box fontColor="white" fullBorderRadius="full" color="black">
          <h2 className={styles.topFont}>About How Busy Is Toon</h2>
        </Box>
      </div>
      {aboutArticleSections.map(({ id, subHeading, contentText }) => (
        <AboutSectionArticle
          key={id}
          subHeading={subHeading}
          contentText={contentText}
        />
      ))}
    </div>
  );
}
