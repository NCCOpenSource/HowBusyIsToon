import React from "react";
import Box from "../../atoms/Box";
import styles from "./AboutSectionArticle.module.css";

export default function AboutSectionArticle({ subHeading, contentText }) {
  return (
    <Box color="grey" fontColor="black" fullBorderRadius="bottom">
      <div className={styles.LinkBox}>
        <div className={styles.subHeading}>
          <h2 className={styles.subHeadingText}>{subHeading}</h2>
        </div>
        <p className={styles.contentText}>{contentText}</p>
      </div>
    </Box>
  );
}
