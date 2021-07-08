import React from "react";
import SelectDropdown from "../index";
import styles from "./CameraFeed.module.css";
import TimeIcon from "../../../assets/icons/time.svg";
import GetFeedImage from "../../atoms";
import { StaticImage } from "gatsby-plugin-image";

export default function CameraFeed() {
  return (
    <div className={styles.cityCenterCameraFeed}>
      <div className={styles.infoContainer}>
        <TimeIcon   />
        <p className={styles.info}>
          Images from webcams update approximately every 5 minutes
        </p>
      </div>
      <div className={styles.select}>
        <SelectDropdown
          // className={styles.select}
        //   onChange
        />
      </div>
      <div className={styles.feed}>
        <StaticImage
          //   className={styles.Feed}
            width={918}
            height={615}
          src="../../images/placeholder.jpg"
        />
      </div>
      {/* <GetFeedImage /> */}
    </div>
  );
}
