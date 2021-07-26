import React, { useState } from "react";
import GetRoadFeedImage from "../../atoms/GetRoadFeedImage";
import styles from "./roadscameraFeed.module.css";

export default function RoadsCameraFeed() {
  const [option, setOption] = useState(0);
  // console.log("🚀 ~ file: index.js ~ line 6 ~ Filter ~ option", option);
  function handleChange(event) {
    setOption(event.target.value);
  }
  return (
    <div className={styles.cityCenterCameraFeed}>
      <div className={styles.select}>
        <div className={styles.selectbox}>
          <select
            className={styles.selector}
            name="option"
            onChange={handleChange}
          >
            <option className={styles.option} value="0">
              Stephenson Road
            </option>
            <option className={styles.option} value="1">
              Stamfordham Road
            </option>
            <option className={styles.option} value="2">
              A186 Pilgrim Street / Mosley Street
            </option>
            <option className={styles.option} value="3">
              B1318 High Street / A191 Church Road & Salters' Road
            </option>
          </select>
        </div>
      </div>
      <div className={styles.feed}>
        <GetRoadFeedImage option={option} />
      </div>
    </div>
  );
}
