import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Box from "../../atoms/Box";
import styles from "./ColorKey.module.css";

export default function ColorKey() {
  return (
    <Box color="grey" fontColor="black">
      <div className={styles.key}>
        <div className={styles.keyItem}>
          <div className={styles.image}>
            <StaticImage
              width={24}
              height={24}
              className={styles.image}
              src={"../../../images/carparkiconsred.png"}
            />
          </div>
          <p className={styles.keyText}>Limited Seats</p>
        </div>
        <div className={styles.keyItem}>
          <div className={styles.image}>
            <StaticImage
              width={24}
              height={24}
              className={styles.image}
              src={"../../../images/carparkiconsOrange.png"}
            />
          </div>
          <p className={styles.keyText}>Moderately Busy</p>
        </div>
        <div className={styles.keyItem}>
          <div className={styles.image}>
            <StaticImage
              width={24}
              height={24}
              className={styles.image}
              src={"../../../images/carparkicons.png"}
            />
          </div>
          <p className={styles.keyText}>Many Seats Available</p>
        </div>
        <div className={styles.keyItem}>
          <div className={styles.image}>
            <StaticImage
              width={24}
              height={24}
              className={styles.image}
              src={"../../../images/carparkiconsBlack.png"}
            />
          </div>
          <p className={styles.keyText}>No Data</p>
        </div>
      </div>
    </Box>
  );
}
