import React, { useState } from "react";
// import SelectDropdown from "../index";
import styles from "./CameraFeed.module.css";
import TimeIcon from "../../../assets/icons/time.svg";
import { StaticImage } from "gatsby-plugin-image";
import GetFeedImage from "../../atoms/GetFeedImage";
import Filter from "../Filter";

export default function CameraFeed() {
  const [option, setOption] = useState();
  // console.log("🚀 ~ file: index.js ~ line 6 ~ Filter ~ option", option);
  function handleChange(event) {
    setOption(event.target.value);
  }
  return (
    <div className={styles.cityCenterCameraFeed}>
      <div className={styles.infoContainer}>
        <TimeIcon />
        <p className={styles.info}>
          Images from webcams update approximately every 5 minutes
        </p>
      </div>
      <div className={styles.select}>
        <div className={styles.selectbox}>
          <select
            className={styles.selector}
            name="option"
            onChange={handleChange}
          >
            <option className={styles.option} value="1">
              1
            </option>
            <option className={styles.option} value="2">
              2
            </option>
            <option className={styles.option} value="3">
              3
            </option>
            <option className={styles.option} value="4">
              4
            </option>
          </select>
        </div>

        {/* <Filter className={styles.select} onChange={handleChange} /> */}
      </div>
      <div className={styles.feed}>
        <GetFeedImage option={option} />
        {/* <StaticImage alt=''
          //   className={styles.Feed}
            // width={918}
            // height={615}
            style={{ height: "100%", width: "100%" }}

          src="../../../images/placeholder.jpg"
        /> */}
      </div>
      {/* <GetFeedImage /> */}
    </div>
  );
}
