import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Box from "../../atoms/Box";
import styles from "./ColorKey.module.css";

export default function ColorKey() {
  return (
    <Box color="grey" fontColor="black">
      <div className={styles.key}>
        <div className={styles.keyItem}>
          <StaticImage
            width={24}
            height={24}
            src={"../../../images/carparkiconsred.png"}
          />
          <p className={styles.keyText}>Limited Spaces</p>
        </div>
        <div className={styles.keyItem}>
          <StaticImage
            width={24}
            height={24}
            src={"../../../images/carparkiconsOrange.png"}
          />
          <p className={styles.keyText}>Moderatly Busy</p>
        </div>
        <div className={styles.keyItem}>
          <StaticImage
            width={24}
            height={24}
            src={"../../../images/carparkicons.png"}
          />
          <p className={styles.keyText}>Many Spaces Available</p>
        </div>
        <div className={styles.keyItem}>
          <StaticImage
            width={24}
            height={24}
            src={"../../../images/carparkiconsBlack.png"}
          />
          <p className={styles.keyText}>No Data</p>
        </div>
      </div>
    </Box>
  );
}
