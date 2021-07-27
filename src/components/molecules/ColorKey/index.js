import React from "react";
import styles from "./ColorKey.module.css";
import Box from "../../atoms/Box";
import { StaticImage } from "gatsby-plugin-image";
export default function ColorKey() {
  return (
    <Box color="grey" fontColor="black">
      <ul className={styles.list}>
        <StaticImage width={24} src="../../../images/carparkiconsred.png" />{" "}
        <li>Limited Spaces</li>
        <StaticImage
          width={24}
          src="../../../images/carparkiconsOrange.png"
        />{" "}
        <li>Moderatly Busy</li>
        <StaticImage width={24} src="../../../images/carparkicons.png" />{" "}
        <li>Many Spaces Available</li>
        <StaticImage
          width={24}
          src="../../../images/carparkiconsBlack.png"
        />{" "}
        <li>No Data</li>
      </ul>
    </Box>
  );
}
