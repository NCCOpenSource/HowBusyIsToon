import React, { useState } from "react";
import GetRoadFeedImage from "../../atoms/GetRoadFeedImage";
import SimpleArticle from "../../atoms/SimpleArticle";
import styles from "./RoadSection.module.css";

export default function RoadsSection() {
  const [option, setOption] = useState(0);
  function handleChange(event) {
    setOption(event.target.value);
  }

  return (
    <div className={styles.container}>
      {/* ////////////////////Selector/////////////////////// */}
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
      {/* /////////////////////////////////////////// */}
      <div className={styles.RoadsCameraFeed}>
        <GetRoadFeedImage option={option} />
      </div>

      <div className={styles.RoadsLookingBusy}>
        <h1 className={styles.calloutText}>
          Roads looking busy? Have you considered cycling or walking instead?
          Our useful links provide tools to help you plan your journey.
        </h1>
      </div>
      <div className={styles.WalkingOrCycling}>
        <SimpleArticle
          TopText="Walking or Cycling?"
          BottomText="User Google Maps to help you decide on which route you’d like to take"
        />
      </div>
      <div className={styles.CycleParking}>
        <SimpleArticle
          TopText="Cycle Parking?"
          BottomText=" Nexus Cycle lockers are located around the City Centre. Find out where
      they are located here"
        />
      </div>
    </div>
  );
}
