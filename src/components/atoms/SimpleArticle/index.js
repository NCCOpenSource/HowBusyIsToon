import React from "react";
import Arrow from "../../../assets/icons/arrow.svg";
import Box from "../Box";
import styles from "./SimpleArticle.module.css";
export default function SimpleArticle({ TopText, BottomText }) {
  return (
    <div className={styles.container}>
      <Box fullBorderRadius="top">
        <p className={styles.topFont}>{TopText}</p>
        <Arrow className={styles.arrow} />
      </Box>
      <Box color="grey" fontColor="black" fullBorderRadius="bottom">
        <p className={styles.bottomFont}>{BottomText}</p>
      </Box>
    </div>
  );
}
