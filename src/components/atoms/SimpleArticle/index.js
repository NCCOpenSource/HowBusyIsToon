import React from "react";
import Box from "../Box";
import styles from "./SimpleArticle.module.css";
import Arrow from "../../../assets/icons/arrow.svg";
export default function SimpleArticle({ TopText, BottomText }) {
  return (
    <div>
      <Box fullBorderRadius="top">
        <p className={styles.topFont}>{TopText}</p>
        <Arrow className={styles.arrow} />
      </Box>
      <Box color="grey" fontColor="black" fullBorderRadius="bottom">
        <p>{BottomText}</p>
      </Box>
    </div>
  );
}
