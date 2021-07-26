import React from "react";
import styles from "./AboutSectionArticle.module.css";
import Box from "../../atoms/Box";

export default function AboutSectionArticle({ subHeading, contentText }) {
  return (
    <Box color="grey" fontColor="black" fullBorderRadius="bottom">
      <div className={styles.LinkBox}>
        <div className={styles.subHeading}>
          <h1 lassName={styles.subHeadingText}>{subHeading}</h1>
        </div>
        <p className={styles.contentText}>{contentText}</p>
      </div>
    </Box>
  );
}
