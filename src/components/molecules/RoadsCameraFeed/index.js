import React, { useState } from "react";
import GetRoadFeedImage from "../../atoms/GetRoadFeedImage";
import styles from "./roadscameraFeed.module.css";

export default function RoadsCameraFeed() {
  const [option, setOption] = useState(0);
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
            <option className={styles.option} value="0" label="Stephenson Road">
              Stephenson Road
            </option>
            <option
              className={styles.option}
              value="1"
              label="Stamfordham Road"
            >
              Stamfordham Road
            </option>
            <option className={styles.option} value="2" label="Pilgrim Street">
              Pilgrim Street
            </option>
            <option className={styles.option} value="3" label="High Road">
              High Street
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
