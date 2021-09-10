import React, { useState } from "react";
import TimeIcon from "../../../assets/icons/time.svg";
import GetFeedImage from "../../atoms/GetFeedImage";
import styles from "./cameraFeed.module.css";

export default function CameraFeed() {
  const [option, setOption] = useState(0);
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
            onBlur={handleChange}
          >
            {" "}
            <option
              className={styles.option}
              value="0"
              label="Northumberland Street"
            >
              Northumberland Street
            </option>
            <option
              className={styles.option}
              value="1"
              label="Collingwood Street"
            >
              Collingwood Street
            </option>{" "}
            <option className={styles.option} value="2" label="Grey Street">
              Grey Street
            </option>
            <option className={styles.option} value="3" label="Barrack Road">
              Barrack Road
            </option>
            <option
              className={styles.option}
              value="4"
              label="Blackett Street 1"
            >
              Blackett Street 1
            </option>
            <option
              className={styles.option}
              value="5"
              label="Blackett Street 2"
            >
              Blackett Street 2
            </option>
          </select>
        </div>
      </div>
      <div className={styles.feed}>
        <GetFeedImage option={option} />
      </div>
    </div>
  );
}
