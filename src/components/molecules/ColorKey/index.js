import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Box from "../../atoms/Box";
import styles from "./ColorKey.module.css";

export default function ColorKey({ ToggleCarPark }) {
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
          <p className={styles.keyText}>Limited spaces</p>
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
          <p className={styles.keyText}>Moderately busy</p>
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
          <p className={styles.keyText}>
            Many {ToggleCarPark ? "spaces" : "seats"} available
          </p>
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
          <p className={styles.keyText}>
            {ToggleCarPark ? "no real time data available" : "No data"}
          </p>
        </div>
      </div>
    </Box>
  );
}
