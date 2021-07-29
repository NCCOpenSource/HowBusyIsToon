import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Box from "../../atoms/Box";
import styles from "./ColorKey.module.css";

export default function ColorKey() {
  return (
    <Box color="grey" fontColor="black">
      <div className={styles.key}>
        <StaticImage
          alt="car park icon red Limited Spaces"
          width={24}
          src="../../../images/carparkiconsred.png"
        />
        <p className={styles.keyText}>Limited Spaces</p>
        <StaticImage
          alt="car park icon orange Moderatly Busy"
          width={24}
          src="../../../images/carparkiconsOrange.png"
        />
        <p className={styles.keyText}>Moderatly Busy</p>
        <StaticImage
          alt="car park icon green Many Spaces Available"
          width={24}
          src="../../../images/carparkicons.png"
        />
        <p className={styles.keyText}>Many Spaces Available</p>
        <StaticImage
          alt="car park icon black No Data"
          width={24}
          src="../../../images/carparkiconsBlack.png"
        />
        <p className={styles.keyText}>No Data</p>
      </div>
    </Box>
  );
}
